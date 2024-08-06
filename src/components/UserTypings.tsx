import { Caret } from "./Caret";
import { Char } from "./Char";

interface UserTypings {
  userInput: string;
  className?: string;
}

export const UserTypings = ({ userInput, className }: UserTypings) => {
  const chars = userInput.split("");

  return (
    <div className={className}>
      {chars.map((char, index) => {
        return <Char key={`${char}-${index}`} char={char} />;
      })}
      <Caret />
    </div>
  );
};
