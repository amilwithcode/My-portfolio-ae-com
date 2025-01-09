"use client";


import { FaRegMoon } from "react-icons/fa";
import { CiSun } from "react-icons/ci";
import { useTheme } from "next-themes";

const ChangeTheme = () => {
  const { resolvedTheme, theme, setTheme } = useTheme();

  return (
    <>
      <button
        type="button"
        onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? <FaRegMoon suppressHydrationWarning/> : <CiSun suppressHydrationWarning/>}
      </button>
    </>
  );
};

export default ChangeTheme;
