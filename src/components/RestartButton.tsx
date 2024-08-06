import { MdRefresh } from "react-icons/md";
import { cn } from "../utils";
import { useRef } from "react";

interface RestartButtonProps {
  onRestart: () => void;
  className?: string;
}

export const RestartButton = ({
  onRestart: handleRestart,
  className,
}: RestartButtonProps) => {
  const onRestartHandle = () => {
    btnRef.current?.blur();
    handleRestart();
  };

  const btnRef = useRef<HTMLButtonElement>(null);
  return (
    <button
      ref={btnRef}
      onClick={onRestartHandle}
      className={cn(
        "hover:bg-zinc-800 p-2 rounded-md transition-all duration-200 mx-auto block",
        className
      )}
    >
      <MdRefresh className="w-6 h-6 text-zinc-200" />
    </button>
  );
};
