import { ChatbotHeader } from './ChatbotHeader';
import { ChatbotIntro } from './ChatbotIntro';

export const Chatbot = () => {
  return (
    <>
      {/* 채팅영역 */}
      <div className="flex flex-col h-full w-[440px]">
        {/* 채팅영역 */}
        <ChatbotHeader />
        <ChatbotIntro />
      </div>
    </>
  );
};
