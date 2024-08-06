import { Words } from "./components/Words";
import { Timer } from "./components/Timer";
import { RestartButton } from "./components/RestartButton";
import { Results } from "./components/Results";
import { UserTypings } from "./components/UserTypings";
import useGame from "./hooks/useGame";
import { calculateAccuracy } from "./utils";

function App() {
  const { words, timeLeft, typed, errors, restart, totalTyped, state } =
    useGame();
  return (
    <div className="max-w-3xl">
      <Timer time={timeLeft} />

      <div className="relative max-w-3xl text-4xl mt-5 mb-10">
        <Words words={words} />
        <UserTypings
          className="absolute inset-0 "
          userInput={typed}
          words={words}
        />
      </div>

      <RestartButton onRestart={restart} />
      <Results
        state={state}
        errors={12}
        accuracyPercentage={calculateAccuracy(errors, totalTyped)}
        total={totalTyped}
      />
    </div>
  );
}

export default App;
