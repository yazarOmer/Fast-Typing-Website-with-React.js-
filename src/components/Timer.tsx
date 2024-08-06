interface TimerProps {
  time: number;
}

export const Timer = ({ time }: TimerProps) => {
  return <h3 className="font-medium text-xl text-orange-400">Time: {time}</h3>;
};
