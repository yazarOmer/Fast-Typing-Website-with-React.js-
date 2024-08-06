import { Caret } from "./Caret";
import { Char } from "./Char";

interface UserTypings {
  userInput: string;
  className?: string;
  words: string;
}

export const UserTypings = ({ userInput, className, words }: UserTypings) => {
  const chars = userInput.split("");

  return (
    <div className={className}>
      {chars.map((char, index) => {
        return (
          <Char
            key={`${char}-${index}`}
            actual={char}
            expected={words[index]}
          />
        );
      })}
      <Caret />
    </div>
  );
};
