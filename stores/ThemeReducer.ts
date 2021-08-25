import { TOGGLE_THEME } from "./constants";

export function ThemeReducer(
  state = {
    dark: false,
  },
  action
) {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_THEME: {
      return {
        ...state,
        dark: !state.dark,
      };
    }
    default:
      return state;
  }
}
