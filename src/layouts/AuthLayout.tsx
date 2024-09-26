// components/AuthLayout.tsx
import React, { ReactNode } from "react";
import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Authentication",
};

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return <main className="flex justify-center items-center">{children}</main>;
};

export default AuthLayout;
