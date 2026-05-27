import { NextResponse } from "next/server";

export async function GET() {
  return new NextResponse("PDF generation not yet implemented", {
    status: 501,
    headers: { "Content-Type": "text/plain" },
  });
}
