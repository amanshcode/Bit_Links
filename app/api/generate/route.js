import { db } from "@/lib/db";

export async function POST(request) {
  try {
    const body = await request.json();

    if (!body.url || !body.shorturl) {
      return Response.json({
        success: false,
        message: "Missing URL or shorturl",
      }, { status: 400 });
    }

    const [existing] = await db.execute(
      "SELECT * FROM url WHERE shorturl = ?",
      [body.shorturl]
    );

    if (existing.length > 0) {
      return Response.json({
        success: false,
        message: "Short URL already exists",
      });
    }

    await db.execute(
      "INSERT INTO url (url, shorturl) VALUES (?, ?)",
      [body.url, body.shorturl]
    );

    return Response.json({
      success: true,
      message: "URL created successfully",
    });

  } catch (err) {
    console.error("API ERROR:", err);

    return Response.json({
      success: false,
      message: err.message,
    }, { status: 500 });
  }
}