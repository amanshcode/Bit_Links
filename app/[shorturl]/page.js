import { redirect } from "next/navigation";
import { db } from "@/lib/db";

export default async function Page({ params }) {
    const { shorturl } = await params;

    // 1. Find URL in MySQL
    const [rows] = await db.execute(
        "SELECT * FROM url WHERE shorturl = ?",
        [shorturl]
    );

    const doc = rows[0];

    // 2. Redirect logic
    if (doc) {
        redirect(doc.url);
    } else {
        redirect(process.env.NEXT_PUBLIC_HOST);
    }
}