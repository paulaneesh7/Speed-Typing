// accept only letters and whitespaces
export const isKeyboardCodeAllowed = (code) => {
  return (
    code.startsWith("Key") ||
    code.startsWith("Digit") ||
    code === "Backspace" ||
    code === "Space"
  );
};

// will count the difference between the string that we typed and the expected string
export const countErrors = (actual, expected) => {
  const expectedCharacters = expected.split("");

  return expectedCharacters.reduce((errors, expectedChar, i) => {
    const actualChar = actual[i];
    if (actualChar !== expectedChar) {
      errors++;
    }
    return errors;
  }, 0);
};

// calculates the percentage of our accuracy
export const calculateAccuracyPercentage = (errors, total) => {
  if (total > 0) {
    const corrects = total - errors;
    return (corrects / total) * 100;
  }

  return 0;
};

export const formatPercentage = (percentage) => {
  return percentage.toFixed(0) + "%";
};

export const debug = (str) => {
  if (process.env.NODE_ENV === "development") {
    console.debug(str);
  }
};
