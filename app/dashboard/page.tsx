"use client";

import { useAuth } from "@/lib/auth-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";

export default function DashboardPage() {
  const { user, profile, loading, signOut } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#fafafd" }}>
        <div className="animate-spin h-8 w-8 border-2 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!user) return null;

  const roleLabels = {
    claimant: "Claimant Portal",
    examiner: "Claims Examiner Dashboard",
    admin: "Admin Panel",
  };

  return (
    <div className="min-h-screen" style={{ background: "#fafafd" }}>
      <header
        className="h-16 border-b flex items-center justify-between px-6"
        style={{ borderColor: "#e2e2ee", background: "#fff" }}
      >
        <div className="flex items-center gap-4">
          <Image src="/logo.svg" alt="Watheeq AI" width={110} height={22} />
          {profile && (
            <span
              className="px-3 py-1 rounded-full text-xs font-semibold"
              style={{
                background: "rgba(0,4,232,0.08)",
                color: "#0004E8",
              }}
            >
              {roleLabels[profile.role] || profile.role}
            </span>
          )}
        </div>
        <div className="flex items-center gap-4">
          {profile && (
            <span className="text-sm font-medium" style={{ color: "#050508" }}>
              {profile.fullName}
            </span>
          )}
          <button
            onClick={async () => {
              await signOut();
              router.push("/login");
            }}
            className="text-sm font-medium px-4 py-2 rounded-lg border transition-all hover:bg-red-50 hover:border-red-200 hover:text-red-600"
            style={{ borderColor: "#e2e2ee", color: "rgba(5,5,8,0.55)" }}
          >
            Sign Out
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-2" style={{ color: "#050508" }}>
          Welcome{profile ? `, ${profile.fullName}` : ""}
        </h1>
        <p className="text-sm mb-8" style={{ color: "rgba(5,5,8,0.55)" }}>
          {profile?.role === "claimant" && "Submit and track your insurance claims."}
          {profile?.role === "examiner" && "Review and process insurance claims with AI assistance."}
          {profile?.role === "admin" && "Manage examiners, policies, and monitor system performance."}
        </p>

        <div
          className="rounded-2xl border p-12 text-center"
          style={{
            borderColor: "#e2e2ee",
            background: "#fff",
            boxShadow: "0 1px 3px rgba(5,5,8,0.05)",
          }}
        >
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
            style={{ background: "rgba(0,4,232,0.08)" }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0004E8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M3 9h18M9 21V9" />
            </svg>
          </div>
          <h2 className="text-xl font-bold mb-2" style={{ color: "#050508" }}>
            Dashboard Coming Soon
          </h2>
          <p className="text-sm" style={{ color: "rgba(5,5,8,0.45)" }}>
            The full {roleLabels[profile?.role || "claimant"]?.toLowerCase()} is under development.
          </p>
        </div>
      </main>
    </div>
  );
}
