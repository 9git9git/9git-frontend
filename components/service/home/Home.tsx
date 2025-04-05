'use client';
import { Logo } from '@/components/common/Logo';
import { Header } from '@/components/shared/Header';
import Card from '@/components/common/Card';
import { ProgressBar } from '@/components/service/home/ProgressBar';
import { ActionButton } from '@/components/common/ActionButton';
import { Plus } from 'lucide-react';
import TodayTodo from './TodayToDo'; //

export const Home = () => {
  return (
    <div>
      <Header>
        <Logo width={45} height={45} />
      </Header>

      <div className="mt-6 flex flex-col items-center gap-4">
        {/* 목표 진행률 카드 */}
        <Card title="목표 진행률" isMore>
          <ProgressBar value={75} title="영어" />
          {/* <ActionButton onClick={() => console.log('추가')} icon={<Plus size={16} />}>
            추가
          </ActionButton>
          <ActionButton onClick={() => console.log('완료')}>완료</ActionButton>

          <ActionButton onClick={() => console.log('삭제')}>삭제</ActionButton> */}
        </Card>

        {/* 오늘의 할 일 카드 */}
        <Card title="오늘의 To-Do">
          <TodayTodo />
        </Card>
      </div>
    </div>
  );
};
