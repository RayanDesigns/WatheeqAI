import { NextRequest, NextResponse } from "next/server";
import { adminAuth, adminDb } from "@/lib/firebase-admin";

const AUTHENTICA_BASE = "https://api.authentica.sa";

export async function POST(req: NextRequest) {
  try {
    const { phone, otp } = await req.json();

    if (!phone || !otp) {
      return NextResponse.json({ error: "Phone and OTP required" }, { status: 400 });
    }

    const apiKey = process.env.AUTHENTICA_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "OTP service not configured" }, { status: 500 });
    }

    const res = await fetch(`${AUTHENTICA_BASE}/api/v2/verify-otp`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Authorization": apiKey,
      },
      body: JSON.stringify({ phone, otp }),
    });

    const data = await res.json();

    if (!res.ok || !data.verified) {
      return NextResponse.json({ error: "Invalid or expired OTP" }, { status: 401 });
    }

    // OTP verified — find or note the user by phone
    let uid: string;
    let isNewUser = false;

    try {
      const existing = await adminAuth.getUserByPhoneNumber(phone);
      uid = existing.uid;
    } catch {
      // User doesn't exist in Firebase Auth yet — will be created during registration
      isNewUser = true;
      uid = "";
    }

    if (isNewUser) {
      // Return verified status so the client can proceed to registration
      return NextResponse.json({ verified: true, isNewUser: true });
    }

    // Existing user — check profile status
    const profileSnap = await adminDb.collection("users").doc(uid).get();
    const profile = profileSnap.data();

    if (profile?.role === "examiner" && profile?.status === "pending") {
      return NextResponse.json(
        { error: "Your examiner account is pending admin approval" },
        { status: 403 }
      );
    }

    if (profile?.status === "rejected") {
      return NextResponse.json(
        { error: "Your account has been rejected. Contact support." },
        { status: 403 }
      );
    }

    // Generate custom token for sign-in
    const token = await adminAuth.createCustomToken(uid, { role: profile?.role });
    return NextResponse.json({ verified: true, token, role: profile?.role });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
