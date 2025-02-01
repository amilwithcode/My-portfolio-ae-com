"use client";

import { useState, useEffect } from "react";
import { FaRegMoon, FaRegSun } from "react-icons/fa";
import { useTheme } from "next-themes";


function ChangeTheme() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // Only render theme switch after mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      className="pr-2 rounded-md hover:bg-white dark:hover:bg-black "
      aria-label={
        resolvedTheme === "light"
          ? "Switch to dark theme"
          : "Switch to light theme"
      }
    >
      {resolvedTheme === "light" ? (
        <FaRegMoon className="w-5 h-5" />
      ) : (
        <FaRegSun className="w-5 h-5" />
      )}
    </button>
  );
};

export default ChangeTheme;