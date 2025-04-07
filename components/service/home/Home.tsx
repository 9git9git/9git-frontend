import { Logo } from '@/components/common/Logo';
import { Header } from '@/components/shared/Header';
import TodoItem from '@/components/shared/TodoItem';
import Card from '@/components/common/Card';
import { ProgressBar } from '@/components/service/home/ProgressBar';

export const Home = () => {
  return (
    <div>
      <Header>
        <Logo width={45} height={45} />
      </Header>

      <div className="mt-6 flex flex-col items-center gap-4">
        <Card title="목표 진행률" isMore>
          <ProgressBar value={75} title="영어" />
          <TodoItem category="영어" text="영어 단어 20개 외우기" />
        </Card>
      </div>
    </div>
  );
};
