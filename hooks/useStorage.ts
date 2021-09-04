export default function useStorage() {
  function getStorage() {
    window.localStorage.getItem("theme");
  }

  function setStorage(theme) {
    window.localStorage.setItem("theme", theme);
  }

  return { getStorage, setStorage };
}
