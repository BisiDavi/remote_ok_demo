export function setStorage(theme) {
  window.localStorage.setItem("dark", theme);
}

export function getStorage() {
  return window.localStorage.getItem("dark");
}
