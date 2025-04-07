import { useToggle } from '@/hooks/useToggle';
import { cn } from '@/lib/utils';

type ToggleButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  item: string;
  selectedClassName?: string;
  unselectedClassName?: string;
};

export const ToggleButton = ({
  className,
  item,
  selectedClassName,
  unselectedClassName,
  children,
  ...props
}: ToggleButtonProps) => {
  const { toggle, isSelected } = useToggle<string>([]);

  const selected = isSelected(item);

  return (
    <button
      className={cn(
        'transition-all focus:outline-none',
        selected ? selectedClassName : unselectedClassName,
        className
      )}
      onClick={() => toggle(item)}
      {...props}
    >
      {children}
    </button>
  );
};
