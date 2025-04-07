'use client';
import { Separator } from '@/components/ui/separator';

interface CardProps {
  title: string;
  isMore?: boolean;
  children?: React.ReactNode; //chilren 생성
}

export default function Card({ title, isMore = false, children }: CardProps) {
  return (
    <section className="bg-primary-light rounded-xl p-4 w-[90%] flex flex-col gap-y-4">
      {/* 제목 + 구분선 묶어서 간격 직접 조절 */}
      <div className="flex flex-col gap-y-1">
        <div className="flex justify-between items-center font-semibold">
          <span>{title}</span>
          {isMore && (
            <div className="text-sm text-secondary font-semibold hover:text-primary">+ 더보기</div>
          )}
        </div>
        <Separator className="bg-beige-deco" />
      </div>

      <div>{children}</div>
    </section>
  );
}
