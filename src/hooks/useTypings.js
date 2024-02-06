import { useCallback, useEffect, useRef, useState } from "react";

// take in input code -> string and we are checking if the code is a Key, Digit, Backspace, Space
const isKeyboardCodeAllowed = (code) => {
  return (
    code.startsWith("Key") ||
    code.startsWith("Digit") ||
    code === "Backspace" ||
    code === "Space"
  );
};

// enabled parameter is a flag that tells whether to record the keystrokes or not
const useTypings = (enabled) => {
  const [cursor, setCursor] = useState(0);
  const [typed, setTyped] = useState("");
  const totalTyped = useRef(0);

  // takes in input a keyboard event, it takes in a key and a code
  const keydownHandler = useCallback(
    ({ key, code }) => {
      if (!enabled || !isKeyboardCodeAllowed(code)) {
        return;
      }

      // if character typed is Backspace, then remove one character and reduce the totalTyped by 1 and cursor
      switch (key) {
        case "Backspace":
          setTyped((prev) => prev.slice(0, -1));
          setCursor((cursor) => cursor - 1);
          totalTyped.current -= 1;
          break;
        default:
          setTyped((prev) => prev.concat(key));
          setCursor((cursor) => cursor + 1);
          totalTyped.current += 1;
      }
    },
    [enabled]
  );

  const clearTyped = useCallback(() => {
    setTyped("");
    setCursor(0);
  }, []);

  const resetTotalTyped = useCallback(() => {
    totalTyped.current = 0;
  }, []);

  // attach the keydown event listener to record keystrokes
  useEffect(() => {
    window.addEventListener("keydown", keydownHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", keydownHandler);
    };
  }, [keydownHandler]);

  return {
    typed,
    cursor,
    clearTyped,
    resetTotalTyped,
    totalTyped: totalTyped.current,
  };
};

export default useTypings;
