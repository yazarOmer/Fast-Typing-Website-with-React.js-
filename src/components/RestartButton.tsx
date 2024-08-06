import { MdRefresh } from "react-icons/md";
import { cn } from "../utils";

interface RestartButtonProps {
  onRestart: () => void;
  className?: string;
}

export const RestartButton = ({
  onRestart: handleRestart,
  className,
}: RestartButtonProps) => {
  return (
    <button
      onClick={handleRestart}
      className={cn(
        "hover:bg-zinc-800 p-2 rounded-md transition-all duration-200 mx-auto block",
        className
      )}
    >
      <MdRefresh className="w-6 h-6 text-zinc-200" />
    </button>
  );
};
