"use client";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { logout } from "@/redux/authSlice";

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const dispatch = useDispatch();
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const token = sessionStorage.getItem("token");
      const user = sessionStorage.getItem("user");

      // Check if session storage is empty
      if (!token || !user) {
        dispatch(logout());
        router.push("/login");
      }
    };

    checkAuth();

    // Event listener for storage changes
    window.addEventListener("storage", checkAuth);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("storage", checkAuth);
    };
  }, [dispatch, router]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return <>{isMounted && isAuthenticated ? children : null}</>;
};

export default ProtectedRoute;
