/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import theme from "@styles/theme";
import { getStorage } from "@utils/localStorage";

export default function useTheme() {
  const [storageThemeState, setStorageThemeState] = useState(null);
  const themeState = useSelector((state) => state.theme);

  useEffect(() => {
    const themeFromStorage = getStorage();
    setStorageThemeState(themeFromStorage);
    console.log("themeFromStorage", themeFromStorage);
  }, []);

  const dark = storageThemeState !== null ? storageThemeState : themeState.dark;

  console.log("dark", dark);

  function themeStyle(element) {
    return dark ? theme[element].dark : theme[element].light;
  }

  return { dark, themeStyle };
}
