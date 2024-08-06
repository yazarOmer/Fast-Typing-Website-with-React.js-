import { faker } from "@faker-js/faker";
import { Words } from "./components/Words";
import { Timer } from "./components/Timer";
import { RestartButton } from "./components/RestartButton";
import { Results } from "./components/Results";
import { UserTypings } from "./components/UserTypings";

const words = faker.random.words(10);

function App() {
  return (
    <div className="max-w-3xl">
      <Timer time={30} />
      <div className="relative max-w-3xl text-4xl mt-5 mb-10">
        <Words words={words} />
        <UserTypings
          className="absolute inset-0 "
          userInput={words.split(" ")[0]}
        />
      </div>
      <RestartButton onRestart={() => null} />
      <Results errors={12} accuracyPercentage={0} total={0} />
    </div>
  );
}

export default App;
