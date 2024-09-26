import LoginForm from "@/components/auth/LoginForm";
import React from "react";
import AuthLayout from "@/layouts/AuthLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentication",
};
export default function LoginPage() {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}
