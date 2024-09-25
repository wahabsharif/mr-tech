"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login"); // Redirect to login if not authenticated
    }
  }, [isAuthenticated, router]);

  return <>{isAuthenticated ? children : null}</>;
};

export default ProtectedRoute;
