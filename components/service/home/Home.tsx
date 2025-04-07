'use client';
import { Logo } from '@/components/common/Logo';
import { Header } from '@/components/shared/Header';
import TodoItem from '@/components/shared/TodoItem';
import Card from '@/components/common/Card';
import { ProgressBar } from '@/components/service/home/ProgressBar';
import { ActionButton } from '@/components/common/ActionButton';
import { Plus } from 'lucide-react';
import CustomBadge from '@/components/common/CustomBadge';
import TodoItem from '@/components/shared/TodoItems';

export const Home = () => {
  return (
    <div>
      <Header>
        <Logo width={45} height={45} />
      </Header>

      <div className="mt-6 flex flex-col items-center gap-4">
        <Card title="오늘의 To Do">
          <TodoItem category="코딩" text="리팩토링 하기" />
          {/* <ProgressBar value={75} title="영어" /> */}
        </Card>
      </div>
    </div>
  );
};
