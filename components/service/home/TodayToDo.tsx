'use client';
import { useState } from 'react';
import { DatePickerSection } from '@/components/common/DatePickerSection';
import { SectionTitle } from '@/components/common/SectionTitle';
import { Goal, Calendar, Repeat, ListTodo } from 'lucide-react';

export default function TodayTodo() {
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [todoInput, setTodoInput] = useState('');
  const goals = ['영어', '코딩', '운동'];
  const days = ['월', '화', '수', '목', '금', '토', '일'];

  const toggleItem = (item: string, list: string[], setList: any) => {
    setList(list.includes(item) ? list.filter((i) => i !== item) : [...list, item]);
  };

  return (
    <>
      {/* 목표 설정 */}
      <section className="mb-5">
        <SectionTitle icon={<Goal size={16} color="#FDA63A" />} text="목표 설정" />
        <div className="flex gap-2">
          {goals.map((goal) => {
            const isSelected = selectedGoals.includes(goal);
            const colorMap: Record<string, string> = {
              영어: '#FDA63A',
              코딩: '#6C88C4',
              운동: '#556B2F',
            };
            const activeColor = colorMap[goal];

            return (
              <button
                key={goal}
                onClick={() => toggleItem(goal, selectedGoals, setSelectedGoals)}
                style={
                  isSelected
                    ? {
                        backgroundColor: activeColor,
                        borderColor: activeColor,
                        color: '#FFFFFF',
                      }
                    : {}
                }
                className={`px-3 py-1 rounded-md text-sm font-semibold border transition-all ${
                  isSelected ? '' : 'bg-[#FDF2E6] text-[#7A4A1D] border-[#E6C9A8]'
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
        <div className="flex gap-1">
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

      {/* 📝 오늘 할 일 */}
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
