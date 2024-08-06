interface WordsProps {
  words: string;
}

export const Words = ({ words }: WordsProps) => {
  return <p className=" text-zinc-400 ">{words}</p>;
};
