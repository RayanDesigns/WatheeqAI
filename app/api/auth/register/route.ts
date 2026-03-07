import { NextRequest, NextResponse } from "next/server";
import { adminAuth, adminDb } from "@/lib/firebase-admin";

export async function POST(req: NextRequest) {
  try {
    const { phone, fullName, role, nationalId, organization } = await req.json();

    if (!phone || !fullName || !role) {
      return NextResponse.json({ error: "Phone, full name, and role are required" }, { status: 400 });
    }

    if (!["claimant", "examiner"].includes(role)) {
      return NextResponse.json({ error: "Invalid role" }, { status: 400 });
    }

    // Verify user doesn't already exist
    try {
      await adminAuth.getUserByPhoneNumber(phone);
      return NextResponse.json({ error: "Account already exists. Please login." }, { status: 409 });
    } catch {
      // Good — user doesn't exist yet
    }

    // Create Firebase Auth user
    const userRecord = await adminAuth.createUser({
      phoneNumber: phone,
      displayName: fullName,
    });

    // Create Firestore user profile
    const profile = {
      uid: userRecord.uid,
      phone,
      fullName,
      role,
      status: role === "examiner" ? "pending" : "active",
      ...(nationalId && { nationalId }),
      ...(organization && { organization }),
      createdAt: new Date().toISOString(),
    };

    await adminDb.collection("users").doc(userRecord.uid).set(profile);

    // For claimants, issue token immediately. Examiners need admin approval.
    if (role === "claimant") {
      const token = await adminAuth.createCustomToken(userRecord.uid, { role: "claimant" });
      return NextResponse.json({ success: true, token, role: "claimant" });
    }

    return NextResponse.json({
      success: true,
      message: "Registration submitted. Awaiting admin approval.",
      status: "pending",
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Internal server error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
