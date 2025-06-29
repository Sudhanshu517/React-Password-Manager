// src/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./firebase";

// 1️⃣ Create Context
const AuthContext = createContext();

// 2️⃣ Custom Hook to Access It Easily
export const useAuth = () => useContext(AuthContext);

// 3️⃣ Provider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // 👇 Google Provider Instance
  const provider = new GoogleAuthProvider();

  // 🔐 Login function
  const login = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("User signed in:", result.user);
      })
      .catch((error) => {
        console.error("Login Error:", error);
      });
  };

  // 🔓 Logout function
  const logout = () => {
    signOut(auth)
      .then(() => console.log("Logged out"))
      .catch((error) => console.error("Logout Error:", error));
  };

  // 🔁 Track auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
