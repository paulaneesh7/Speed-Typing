import { faker } from "@faker-js/faker";

const words = faker.random.words(10);

function App() {
  return (
    <>
      <CountdownTimer timeLeft={30} />
      <GeneratedWords words={words} />
    </>
  );
}

const GeneratedWords = ({ words }) => {
  return <div className="text-4xl font-bold text-slate-500">{words}</div>;
};

const CountdownTimer = ({ timeLeft }) => {
  return <h2 className="text-yellow-400 font-medium">Time: {timeLeft}</h2>;
};

export default App;
