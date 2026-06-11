import { db } from "@/lib/db";

export async function POST(request) {
  const body = await request.json();

  // 1. Check if shorturl already exists
  const [existing] = await db.execute(
    "SELECT * FROM url WHERE shorturl = ?",
    [body.shorturl]
  );

  if (existing.length > 0) {
    return Response.json({
      success: false,
      error: true,
      message: "URL already exists!",
    });
  }

  // 2. Insert new URL
  await db.execute(
    "INSERT INTO url (url, shorturl) VALUES (?, ?)",
    [body.url, body.shorturl]
  );

  return Response.json({
    success: true,
    error: false,
    message: "URL Generated Successfully",
  });
}