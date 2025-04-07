'use client';
import { Logo } from '@/components/common/Logo';
import { Header } from '@/components/shared/Header';
import Card from '@/components/common/Card';
import { ProgressBar } from '@/components/service/home/ProgressBar';
import TodayMemo from './TodayMemo';

export const Home = () => {
  return (
    <div>
      <Header>
        <Logo width={45} height={45} />
      </Header>

      <div className="mt-6 flex flex-col items-center gap-4">
        {/* 목표 진행률 카드 */}
        <Card title="목표 진행률" rightAction="+ 더보기">
          <ProgressBar value={75} title="영어" />
        </Card>

        {/* 오늘의 메모 카드 */}
        <TodayMemo />
      </div>
    </div>
  );
};
