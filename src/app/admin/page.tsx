import AdminLayout from "@/layouts/AdminLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Techies - Dashboard",
};
export default function Home() {
  return (
    <AdminLayout>
      <div className="p-10">
        <h1 className="text-2xl mb-4">Admin Page</h1>
        <p>This page is protected and only accessible to logged-in users.</p>
      </div>
    </AdminLayout>
  );
}
