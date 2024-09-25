"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "@/redux/authSlice";
import { useRouter } from "next/navigation";
import { FiEye, FiEyeOff } from "react-icons/fi";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (res.ok) {
      // Store user ID and full name in session storage
      // sessionStorage.setItem("userId", data.user._id);
      // sessionStorage.setItem("fullName", data.user.fullName);

      // Make sure to include the token in the login dispatch
      dispatch(
        login({
          fullName: data.user.fullName,
          username: data.user.username,
          active: data.user.active,
          token: data.token, // Include the token in the payload
        })
      );

      router.push("/"); // Redirect after successful login
    } else {
      alert(data.error);
    }
  };

  return (
    <section className="flex items-center justify-center h-screen">
      <form
        onSubmit={handleLogin}
        className="max-w-sm w-full p-6 bg-teal-800 shadow-md rounded-md"
      >
        <h1 className="text-2xl mb-4 text-center text-white">Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="block w-full mb-2 p-2 border border-gray-300 rounded lowercase"
          required
        />
        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full p-2 border border-gray-300 rounded"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <FiEyeOff className="text-gray-300" />
            ) : (
              <FiEye className="text-gray-300" />
            )}
          </button>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </section>
  );
};

export default LoginForm;
