import { Progress } from '@/components/ui/progress';

type Props = {
  value: number;
  title: string;
};

export const ProgressBar = ({ value, title }: Props) => {
  return (
    <div className="w-[90%] max-w-xs mx-auto space-y-2">
      <div className="flex justify-between">
        <p className="text-xs text-secondary font-semibold">{title}</p>
        <p className="text-xs text-secondary font-semibold">{value}% 달성</p>
      </div>
      <Progress
        value={value}
        className="h-2 rounded-full bg-beige-base"
        indicatorClassName="bg-primary"
      />
    </div>
  );
};
