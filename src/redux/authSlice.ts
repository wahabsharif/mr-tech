// src/store/authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  user: { fullName: string; username: string; active: boolean } | null;
  isAuthenticated: boolean;
}

// Function to retrieve user from sessionStorage
const getUserFromsessionStorage = () => {
  const user = sessionStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

// Function to check if authenticated from sessionStorage
const isAuthenticatedFromsessionStorage = () => {
  return !!sessionStorage.getItem("token"); // Assume token is stored on login
};

const initialState: AuthState = {
  user: getUserFromsessionStorage(), // Set user from sessionStorage
  isAuthenticated: isAuthenticatedFromsessionStorage(), // Set authentication status from sessionStorage
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
        token: string;
      }>
    ) {
      state.user = action.payload;
      state.isAuthenticated = true;
      sessionStorage.setItem("user", JSON.stringify(action.payload));
      sessionStorage.setItem("token", action.payload.token);
    },
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
      sessionStorage.removeItem("user");
      sessionStorage.removeItem("token");
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
