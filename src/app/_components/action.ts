"use server";
import { sql } from "@vercel/postgres";
export async function SaveLead({
  name,
  email,
  phoneNumber,
}: {
  name: string;
  email: string;
  phoneNumber: string;
}) {
  try {
    await sql`INSERT INTO PreEnrollMent (name,email,phoneNumber) VALUES (${name}, ${email}, ${phoneNumber})`;
  } catch (e) {
    console.log(e);
  }
}
