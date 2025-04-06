'use client';
import { useState } from 'react';
import { DatePickerSection } from '@/components/shared/DatePickerSection';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { Goal, Calendar, Repeat, ListTodo } from 'lucide-react';
import React, { Dispatch, SetStateAction } from 'react';
import { ColorMap } from '@/constants/color';

export default function TodayTodo() {
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [todoInput, setTodoInput] = useState('');
  const goals = ['영어', '코딩', '운동'];
  const days = ['월', '화', '수', '목', '금', '토', '일'];

  const toggleItem = (
    item: string,
    list: string[],
    setList: Dispatch<SetStateAction<string[]>>
  ) => {
    setList(list.includes(item) ? list.filter((i) => i !== item) : [...list, item]);
  };

  return (
    <>
      {/* 목표 설정 */}
      <section className="mb-5">
        <SectionTitle icon={<Goal size={16} color="#FDA63A" />} text="목표 설정" />
        <div className="flex justify-center items-center gap-10">
          {goals.map((goal) => {
            const isSelected = selectedGoals.includes(goal);
            const colorClass = ColorMap[goal] ?? 'bg-gray-200';

            return (
              <button
                key={goal}
                onClick={() => toggleItem(goal, selectedGoals, setSelectedGoals)}
                className={`px-3 py-1 rounded-md text-sm font-semibold border transition-all
                  ${
                    isSelected
                      ? `${colorClass} text-white border-transparent border-none`
                      : 'bg-[#FDF2E6] text-[#7A4A1D] border-2 border-[#FDA63A]'
                  }`}
              >
                {goal}
              </button>
            );
          })}
        </div>
      </section>

      {/* 기간 설정 */}
      <section className="mb-5">
        <SectionTitle icon={<Calendar size={16} color="#FDA63A" />} text="기간 설정" />
        <DatePickerSection />
      </section>

      {/* 반복 여부 */}
      <section className="mb-5">
        <SectionTitle icon={<Repeat size={16} color="#FDA63A" />} text="반복 여부" />
        <div className="flex justify-center items-center gap-4">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => toggleItem(day, selectedDays, setSelectedDays)}
              className={`w-8 h-8 rounded-md text-sm font-bold ${
                selectedDays.includes(day)
                  ? 'bg-[#6C542C] text-white'
                  : 'bg-[#FDF2E6] text-[#7A4A1D]'
              }`}
            >
              {day}
            </button>
          ))}
        </div>
      </section>

      {/* 오늘 할 일 */}
      <section className="mb-1">
        <SectionTitle icon={<ListTodo size={16} color="#FDA63A" />} text="오늘 할 일" />
        <div className="flex items-center border-b border-[#F6C98E]">
          <input
            type="text"
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
            placeholder="오늘 할 일을 작성해주세요"
            className="flex-1 text-sm px-1 py-1 bg-transparent text-[#7A4A1D] placeholder-[#C7A98E] focus:outline-none"
          />
          <button className="text-[#FCAA2B] text-sm font-bold px-1">+ 추가</button>
        </div>
      </section>
    </>
  );
}
