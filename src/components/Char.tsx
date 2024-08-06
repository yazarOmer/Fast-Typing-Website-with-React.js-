interface CharProps {
  char: string;
}

export const Char = ({ char }: CharProps) => {
  return <span className="text-orange-400">{char}</span>;
};
