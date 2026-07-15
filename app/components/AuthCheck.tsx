"use client";

import { useEffect, useState } from "react";

export default function AuthCheck({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 1. Check URL for token
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    if (token) {
      localStorage.setItem("authToken", token);
      const newUrl = window.location.pathname;
      window.history.replaceState({}, document.title, newUrl);
      window.location.reload();
      return;
    }

    // 2. Check localStorage
    const storedToken = localStorage.getItem("authToken");
    if (!storedToken) {
      window.location.href =
        "https://sandtonschoolgroup.vercel.app/login?returnTo=" +
        encodeURIComponent(window.location.href);
      return;
    }

    // 3. Validate token
    try {
      const payload = JSON.parse(atob(storedToken.split(".")[1]));
      if (payload.exp && payload.exp * 1000 < Date.now()) {
        localStorage.removeItem("authToken");
        window.location.href = "https://sandtonschoolgroup.vercel.app/login";
        return;
      }
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsAuthenticated(true);
    } catch {
      localStorage.removeItem("authToken");
      window.location.href = "https://sandtonschoolgroup.vercel.app/login";
      return;
    } finally {
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return (
      <div className="pt-20 min-h-[60vh] flex items-center justify-center">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) return null;
  return <>{children}</>;
}