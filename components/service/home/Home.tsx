import { Logo } from "@/components/common/Logo";
import { Header } from "@/components/shared/Header";
import TodoItem from "@/components/shared/TodoItem";

export const Home = () => {
  return (

    <div>
      <Header>
        <Logo width={45} height={45} />
      </Header>
      <TodoItem category="영어" text="영어 단어 20개 외우기" />
    </div>
  );
};
