import { useState } from "react";

function useLocalStorage(key, defaultValue) {
  const local = localStorage.getItem(key);

  const [state, setState] = useState(local ? local : defaultValue);

  const setToLocalStorage = (value) => {
    localStorage.setItem(key, value);
    setState(value);
  };

  return [state, setToLocalStorage];
}

export default useLocalStorage;
