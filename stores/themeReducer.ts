import { setStorage } from "../utils/localStorage";
import { PERSIST_THEME, TOGGLE_THEME } from "./constants";

export default function ThemeReducer(
  state = {
    dark: false,
  },
  action
) {
  const { type } = action;
  switch (type) {
    case TOGGLE_THEME: {
      return {
        ...state,
        dark: !state.dark,
      };
    }
    case PERSIST_THEME: {
      setStorage(state.dark);
      return state;
    }
    default:
      return state;
  }
}
