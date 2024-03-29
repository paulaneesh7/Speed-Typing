import RestartButton from "./components/RestartButton";
import Results from "./components/Results";
import UserTypings from "./components/UserTypings";
import WordsContainer from "./components/WordsContainer";
import useEngine from "./hooks/useEngine";
import { calculateAccuracyPercentage } from "./utils/helpers";
import { LinearGradient } from "react-text-gradients";

// const words = faker.random.words(10);

function App() {
  const { state, words, timeLeft, typed, errors, restart, totalTyped } =
    useEngine();

  return (
    <>
      <h1 className="mb-20 text-5xl font-bold text-center mt-15 md:text-6xl">
        <LinearGradient gradient={["to right", " yellow, red"]}>
          Lightning Type
        </LinearGradient>
      </h1>

      <CountdownTimer timeLeft={timeLeft} />
      {/* <GeneratedWords words={words} /> */}
      <WordsContainer>
        <GeneratedWords words={words} />
        <UserTypings
          className="absolute inset-0"
          words={words}
          userInput={typed}
        />
      </WordsContainer>
      <RestartButton
        className={"mx-auto mt-10 text-slate-500"}
        onRestart={restart}
      />
      {state !== "finish" ? null : (
        <Results
          className="mt-10 mb-10"
          errors={errors}
          accuracyPercentage={calculateAccuracyPercentage(errors, totalTyped)}
          total={totalTyped}
        />
      )}
    </>
  );
}

const GeneratedWords = ({ words }) => {
  return <div className="text-slate-500">{words}</div>;
};

const CountdownTimer = ({ timeLeft }) => {
  return <h2 className="font-medium text-yellow-400">Time: {timeLeft}</h2>;
};

export default App;
