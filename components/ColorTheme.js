import { MoonIcon, SunIcon } from "@heroicons/react/solid";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function ColorTheme() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <SunIcon
          className="w-7 h-7"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <MoonIcon
          className="w-7 h-7"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };
  return (
    <div>
      <div className=" justify-between items-center">
        {renderThemeChanger()}
      </div>
    </div>
  );
}

export default ColorTheme;
