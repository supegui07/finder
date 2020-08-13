import { useState, useEffect } from "react";

export const useLocalStorage = (initialState, storedProp, key) => {
  const get = () => {
    const storage = localStorage.getItem(key);
    if (storage) return JSON.parse(storage)[storedProp];
    return initialState;
  }

  const [value, setValue] = useState(get())

  useEffect(() => {
    localStorage.setItem(
      key,
      JSON.stringify({ [storedProp]: value || initialState }))
  }, [initialState, key, storedProp, value])

  return [value, setValue];
}