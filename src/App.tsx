import { faker } from "@faker-js/faker";
import { Words } from "./components/Words";
import { Timer } from "./components/Timer";
import { RestartButton } from "./components/RestartButton";
import { Results } from "./components/Results";

const words = faker.random.words(10);

function App() {
  return (
    <div className="max-w-3xl">
      <Timer time={30} />
      <Words words={words} />
      <RestartButton onRestart={() => null} />
      <Results errors={12} accuracyPercentage={0} total={0} />
    </div>
  );
}

export default App;
