// components/AdminLayout.tsx
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Techies - Dashboard",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProtectedRoute>
      <div className="flex h-screen w-full">
        <main className="flex-1 p-4 w-full sm:ml-60 bg-gray-100 overflow-y-auto">
          {children}
        </main>
      </div>
    </ProtectedRoute>
  );
}
