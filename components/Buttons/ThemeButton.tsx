/* eslint-disable @next/next/no-img-element */
import { useSelector, useDispatch } from "react-redux";
import toggleThemeAction from "@stores/toggleThemeAction";
import useTheme from "@hooks/useTheme";
import styles from "./header.module.css";

export default function ThemeButton() {
  const { dark } = useTheme();
  const dispatch = useDispatch();

  const themeState = dark ? "/moon.png" : "/sun.svg";

  function themeHandler() {
    dispatch(toggleThemeAction());
  }

  return (
    <>
      <button onClick={themeHandler} className="themeButton">
        <img src={themeState} alt="icons" />
      </button>
      <style jsx>
        {`
          .themeButton {
            height: 60px;
            width: 60px;
            border-radius: 50%;
            border: none;
            padding: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: transparent;
          }

          .themeButton:focus {
            outline: none;
          }
        `}
      </style>
    </>
  );
}