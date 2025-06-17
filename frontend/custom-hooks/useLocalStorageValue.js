import { useEffect, useState } from "react";

function useLocalStorageValue(key, defaultValue = "") {
  const [value, setVaue] = useState("");
  useEffect(() => {
    const stored = localStorage.getItem(key);
    if (stored) {
      setVaue(stored);
    }
  }, [key]);
  return value;
}
export default useLocalStorageValue;
