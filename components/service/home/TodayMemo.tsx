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
      {/*내부 콘텐츠 */}
      <div className="flex flex-col gap-y-4">
        {/* 제목 */}
        <div>
          <SectionTitle icon={<FileTextIcon size={16} color="#FDA63A" />} text="제목" />
          <input
            className="w-full p-2 border border-orange-300 rounded-md bg-transparent placeholder:text-sm"
            placeholder="메모 제목을 작성해주세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* 메모 내용 */}
        <div>
          <SectionTitle icon={<StarIcon size={16} color="#FDA63A" />} text="메모 내용" />
          <input
            className="w-full p-2 border border-orange-300 rounded-md bg-transparent placeholder:text-sm"
            placeholder="메모 내용을 작성해주세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        {/* 기간 설정 */}
        <div>
          <SectionTitle icon={<CalendarIcon size={16} color="#FDA63A" />} text="기간 설정" />
          <div className="flex items-center gap-2">
            <DatePickerSection />
            <span className="text-sm">~</span>
            <DatePickerSection />
          </div>
        </div>

        {/* 하단 버튼 */}
        <div className="flex justify-between text-sm font-semibold">
          <ActionButton onClick={() => console.log('삭제')}>삭제</ActionButton>
          <ActionButton onClick={() => console.log('완료')}>완료</ActionButton>
        </div>
      </div>
    </Card>
  );
}
