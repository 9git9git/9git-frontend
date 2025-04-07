'use client';

import { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import CustomBadge from '../common/CustomBadge';

type TodoItemProps = {
  category: string;
  text: string;
};

export default function TodoItem({ category, text }: TodoItemProps) {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex items-center gap-3 w-full">
      {/* 카테고리 뱃지 */}
      <CustomBadge label={category} />

      {/* 투두 텍스트 */}
      <p
        className={`text-sm font-semibold text-[#744D2C] mx-4 flex-1 text-center ${
          checked ? 'line-through opacity-50' : ''
        }`}
      >
        {text}
      </p>

      {/* 체크박스 */}
      <Checkbox
        checked={checked}
        onCheckedChange={(checked) => setChecked(checked === 'indeterminate' ? false : checked)}
      />
    </div>
  );
}
