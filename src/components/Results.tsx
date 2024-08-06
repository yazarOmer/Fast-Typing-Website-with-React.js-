import { State } from "../hooks/useGame";
import { cn, formatPercentage } from "../utils";

interface ResultsProps {
  errors: number;
  accuracyPercentage: number;
  total: number;
  className?: string;
  state: State;
}

export const Results = ({
  state,
  errors,
  accuracyPercentage,
  total,
  className,
}: ResultsProps) => {
  if (state !== "finish") {
    return null;
  }

  return (
    <ul
      className={cn(
        "flex flex-col items-center text-orange-200 space-y-3 mt-3 text-lg",
        className
      )}
    >
      <h2 className="text-xl font-semibold text-pink-500">Results</h2>
      <li>Accuracy: {formatPercentage(accuracyPercentage)}</li>
      <li>
        Errors:{" "}
        <span
          className={
            errors < 5
              ? "text-red-300"
              : errors >= 5 && errors < 10
              ? "text-red-400"
              : "text-red-500"
          }
        >
          {errors}
        </span>
      </li>
      <li>Typed: {total}</li>
    </ul>
  );
};
