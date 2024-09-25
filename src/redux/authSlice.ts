// src/store/authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  user: { fullName: string; username: string; active: boolean } | null;
  isAuthenticated: boolean;
}

// Function to retrieve user from localStorage
const getUserFromLocalStorage = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

// Function to check if authenticated from localStorage
const isAuthenticatedFromLocalStorage = () => {
  return !!localStorage.getItem("token"); // Assume token is stored on login
};

const initialState: AuthState = {
  user: getUserFromLocalStorage(), // Set user from localStorage
  isAuthenticated: isAuthenticatedFromLocalStorage(), // Set authentication status from localStorage
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(
      state,
      action: PayloadAction<{
        fullName: string;
        username: string;
        active: boolean;
        token: string; // Add token to the payload
      }>
    ) {
      state.user = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem("user", JSON.stringify(action.payload)); // Save user to localStorage
      localStorage.setItem("token", action.payload.token); // Save token to localStorage
    },
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("user"); // Remove user from localStorage
      localStorage.removeItem("token"); // Remove token from localStorage
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
