'use client';

import { useState } from 'react';
import { ActionButton } from '@/components/common/ActionButton';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { DatePickerSection } from '@/components/shared/DatePickerSection';
import { CalendarIcon, StarIcon, FileTextIcon, PenLine, X } from 'lucide-react';
import Card from '@/components/common/Card';

export default function TodayMemo() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>(new Date());

  const isContentValid = content.trim().length > 0;

  // const handleSubmit = () => {
  //   if (!isContentValid) return;
  //   console.log('완료');
  // };

  return (
    <Card
      title={
        <div className="flex items-center gap-2 text-[#744D2C] font-bold text-sm">
          <PenLine size={16} color="#FDA63A" />
          <span>오늘의 Memo</span>
        </div>
      }
      rightAction={<X size={16} />}
    >
      <div className="flex flex-col gap-y-4">
        {/* 제목 (선택) */}
        <div>
          <SectionTitle icon={<FileTextIcon size={16} color="#FDA63A" />} text="제목" />
          <input
            className="w-full p-2 border border-orange-300 rounded-md bg-transparent placeholder:text-sm"
            placeholder="제목을 작성해주세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* 메모 내용 (필수) */}
        <div>
          <SectionTitle icon={<StarIcon size={16} color="#FDA63A" />} text="메모 내용 *" />
          <textarea
            rows={2}
            maxLength={300}
            className="w-full p-2 border border-orange-300 rounded-md bg-transparent placeholder:text-sm resize-none"
            placeholder="메모 내용을 입력해주세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div className="flex justify-between mt-1 text-xs text-[#744D2C]">
            {!isContentValid && <span className="text-primary">내용은 필수입니다.</span>}
          </div>
        </div>

        {/* 기간 설정 */}

        {/* 하단 버튼 */}
      </div>
    </Card>
  );
}
