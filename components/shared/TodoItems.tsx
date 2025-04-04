'use client';
import { useState } from 'react';
import CustomBadge from '../common/CustomBadge';
// checkbox import

type TodoItemProps = {
  category: string;
  text: string;
};

export default function TodoItem({ category, text }: TodoItemProps) {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex items-center gap-3 w-full">
      <CustomBadge label={category} />

      <p
        className={`text-lg font-bold text-[#FDA63A] mx-4 flex-1 text-center ${
          checked ? 'line-through opacity-50' : ''
        }`}
      >
        {text}
      </p>
      {/* checkbox 코드 넣기 */}
    </div>
  );
}
