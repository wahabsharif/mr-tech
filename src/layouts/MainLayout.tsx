import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mr TechieS",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen scrollbar-thin scrollbar-track-slate-900 scrollbar-thumb-darkGold scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
        <main>{children}</main>
      </body>
    </html>
  );
}
