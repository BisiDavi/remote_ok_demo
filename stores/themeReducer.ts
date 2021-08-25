import { TOGGLE_THEME } from "./constants";

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
    default:
      return state;
  }
}
