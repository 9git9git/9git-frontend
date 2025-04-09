'use client';
import { Logo } from '@/components/common/Logo';
import { Header } from '@/components/shared/Header';
import Card from '@/components/common/Card';
import { ProgressBar } from '@/components/service/home/ProgressBar';

import TodayTodo from './TodoPopup'; //
import HomeContainer from './HomeContainer';

export const Home = () => {
  return (
    <div>
      <Header>
        <Logo width={45} height={45} />
      </Header>

      <HomeContainer />
    </div>
  );
};
