import { TOGGLE_THEME,PERSIST_THEME } from "./constants";

const toggleThemeAction = () => (dispatch) => {
    dispatch({ type: TOGGLE_THEME })
    dispatch({ type: PERSIST_THEME })

}
    ;

export default toggleThemeAction;
