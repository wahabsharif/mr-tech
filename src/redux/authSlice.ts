import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  user: { fullName: string; username: string; active: boolean } | null;
  isAuthenticated: boolean;
}

// Function to retrieve user from sessionStorage (only on the client side)
const getUserFromsessionStorage = () => {
  if (typeof window !== "undefined") {
    // Make sure we're on the client side
    const user = sessionStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  }
  return null; // Return null during SSR
};

// Function to check if authenticated from sessionStorage (only on the client side)
const isAuthenticatedFromsessionStorage = () => {
  if (typeof window !== "undefined") {
    // Make sure we're on the client side
    return !!sessionStorage.getItem("token");
  }
  return false; // Return false during SSR
};

const initialState: AuthState = {
  user: null, // Default to null, will populate on the client side
  isAuthenticated: false, // Default to false, will populate on the client side
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Login reducer
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

      if (typeof window !== "undefined") {
        // Ensure we're on the client side
        sessionStorage.setItem("user", JSON.stringify(action.payload));
        sessionStorage.setItem("token", action.payload.token);
      }
    },

    // Logout reducer
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;

      if (typeof window !== "undefined") {
        // Ensure we're on the client side
        sessionStorage.removeItem("user");
        sessionStorage.removeItem("token");
      }
    },

    // Action to restore auth state from sessionStorage
    restoreSession(state) {
      const user = getUserFromsessionStorage();
      const isAuthenticated = isAuthenticatedFromsessionStorage();

      state.user = user;
      state.isAuthenticated = isAuthenticated;
    },
  },
});

export const { login, logout, restoreSession } = authSlice.actions;

export default authSlice.reducer;
