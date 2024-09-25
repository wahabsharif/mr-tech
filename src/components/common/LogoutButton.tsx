// src/components/LogoutButton.tsx
"use client"; // Ensure this component is a client component

import { useDispatch } from "react-redux";
import { logout } from "@/redux/authSlice";
import { useRouter } from "next/navigation";
import { FiLogOut } from "react-icons/fi"; // Importing the logout icon

const LogoutButton = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout()); // Dispatch logout action
    sessionStorage.removeItem("user"); // Clear user from session storage
    sessionStorage.removeItem("token"); // Clear token from session storage
    router.push("/login"); // Redirect to login page
  };

  return (
    <button
      onClick={handleLogout}
      className="flex items-center p-2 text-white text-lg bg-red-600 rounded"
    >
      <FiLogOut />
    </button>
  );
};

export default LogoutButton;
