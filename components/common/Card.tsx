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
    <section className="bg-primary-light rounded-xl p-4 w-[90%] flex flex-col gap-y-4">
      <div className="flex justify-between items-center font-semibold text-secondary">
        <div>{title}</div>
        {rightAction && (
          <div className="cursor-pointer hover:text-primary transition-colors duration-200">
            {rightAction}
          </div>
        )}
      </div>
      <Separator className="bg-beige-deco" />
      <div className="mt-2">{children}</div>
    </section>
  );
}
