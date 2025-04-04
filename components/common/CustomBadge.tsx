'use client';
import { Badge } from '@/components/ui/badge';

type CustomBadgeProps = {
  label?: string;
  color?: string; //BE에서 색상 데이터 받을 예정
};

export default function CustomBadge({ label = 'Badge', color = '#FCAA2B' }: CustomBadgeProps) {
  return (
    <Badge className={`rounded-sm font-semibold text-white`} style={{ backgroundColor: color }}>
      {label}
    </Badge>
  );
}
