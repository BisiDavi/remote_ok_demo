import { useSelector } from "react-redux";
import theme from "@styles/theme";

export default function useTheme() {
  const  {dark}  = useSelector((state) => state.theme);

  function themeStyle(element) {
    return dark ? theme[element].dark : theme[element].light;
  }

  return { dark, themeStyle };
}
