import { faker } from "@faker-js/faker";
import { useCallback, useState } from "react";

const generateWords = (count) => {
  return faker.word.words(count).toLowerCase();
};

const useWords = (count) => {
  const [words, setWords] = useState(generateWords(count));

  const updateWords = useCallback(() => {
    setWords(generateWords(count));
  }, [count]);

  return { words, updateWords };
};

export default useWords;

// This function will store the currently used words and even update them whenever those words are updated.
