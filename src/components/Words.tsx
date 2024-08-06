interface WordsProps {
  words: string;
}

export const Words = ({ words }: WordsProps) => {
  return <p className="text-4xl text-zinc-400 mt-5 mb-10">{words}</p>;
};
