"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface User {
  studentName?: string;
  email?: string;
  role?: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  user: null,
  logout: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split(".")[1]));
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setUser({
          studentName: payload.studentName || payload.name || "Student",
          email: payload.email,
          role: payload.role,
        });
         
        setIsAuthenticated(true);
      } catch {
        localStorage.removeItem("authToken");
         
        setIsAuthenticated(false);
         
        setUser(null);
      }
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}