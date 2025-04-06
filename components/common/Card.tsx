'use client';
import { Separator } from '@/components/ui/separator';
import { ReactNode } from 'react';

interface CardProps {
  title: ReactNode;
  rightAction?: ReactNode;
  children?: ReactNode;
}

export default function Card({ title, rightAction, children }: CardProps) {
  return (
    <section className="bg-[#fff0d5] rounded-xl p-4 w-[90%] flex flex-col gap-y-2">
      <div className="flex justify-between items-center font-semibold text-[#744D2C]">
        <div>{title}</div>
        {rightAction && (
          <div className="cursor-pointer hover:text-[#FDA63A] transition-colors duration-200">
            {rightAction}
          </div>
        )}
      </div>
      <Separator className="bg-[#f4ddbd]" />
      <div className="mt-2">{children}</div>
    </section>
  );
}
