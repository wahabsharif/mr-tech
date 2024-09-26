import ProtectedRoute from "@/components/auth/ProtectedRoute";
import SideBar from "@/components/common/SideBar";
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
        <SideBar />
        <main className="flex-1 p-4 w-full sm:ml-60 bg-gray-100 overflow-y-auto">
          {children}
        </main>
      </div>
    </ProtectedRoute>
  );
}
