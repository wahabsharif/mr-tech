import MainLayout from "@/layouts/MainLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mr Techies",
};

export default function HomePage() {
  return (
    <MainLayout>
      <div className="p-10">
        <h1 className="text-2xl mb-4">Home Page</h1>
      </div>
    </MainLayout>
  );
}
