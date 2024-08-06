import { cn } from "../utils";

interface CharProps {
  actual: string;
  expected: string;
}

export const Char = ({ actual, expected }: CharProps) => {
  const isCorrect = actual === expected;
  const isWhiteSpace = expected === " ";
  return (
    <span
      className={cn({
        "text-red-500": !isCorrect && !isWhiteSpace,
        "text-green-500": isCorrect && !isWhiteSpace,
        "bg-red-500/50 rounded-sm": !isCorrect && isWhiteSpace,
      })}
    >
      {expected}
    </span>
  );
};
