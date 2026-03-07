import { NextRequest, NextResponse } from "next/server";

const AUTHENTICA_BASE = "https://api.authentica.sa";

export async function POST(req: NextRequest) {
  try {
    const { phone } = await req.json();

    if (!phone || !/^\+9665\d{8}$/.test(phone)) {
      return NextResponse.json(
        { error: "Valid Saudi phone number required (+9665XXXXXXXX)" },
        { status: 400 }
      );
    }

    const apiKey = process.env.AUTHENTICA_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "OTP service not configured" }, { status: 500 });
    }

    const res = await fetch(`${AUTHENTICA_BASE}/api/v2/send-otp`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Authorization": apiKey,
      },
      body: JSON.stringify({ method: "sms", phone }),
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json(
        { error: data.message || "Failed to send OTP" },
        { status: res.status }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
