import { X, Pencil, Trash2, FolderOpen } from 'lucide-react';
import { ActionButton } from '@/components/common/ActionButton'; // 편집/삭제 버튼 래핑 컴포넌트
import Image from 'next/image';

import { SidebarHeader } from './SidebarHeader';
import { DUMMY_CHATBOT_STORAGE } from '@/constants/chatbot_storage';

export const Sidebar = ({ onClose }: { onClose: () => void }) => {
  // 카테고리별로 묶기
  const groupedByCategory = DUMMY_CHATBOT_STORAGE.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof DUMMY_CHATBOT_STORAGE>);

  return (
    <div className="fixed inset-0 z-50 max-w-[440px] mx-auto flex bg-black/70">
      <div className="fixed top-0 h-full w-96 bg-beige-light z-50">
        {/* 헤더 */}
        <SidebarHeader onClose={} />

        {/* 내용 */}
        <div className="p-4 space-y-6 overflow-y-auto text-secondary">
          {Object.entries(groupedByCategory).map(([category, items]) => (
            <div key={category}>
              {/* 카테고리 제목 + 아이콘 */}
              <div className="flex items-center gap-2 font-bold text-[17px] mb-1">
                <FolderOpen size={18} />
                <span>{category}</span>
              </div>

              {/* 리스트 */}
              <ul className="pl-2 space-y-1">
                {items.map((item, idx) => (
                  <li
                    key={`${item.category}-${item.date}-${idx}`}
                    className="flex justify-between items-center"
                  >
                    <span className="text-sm">
                      [{item.date.slice(2)}] {item.title}
                    </span>
                    <span className="flex gap-1">
                      <ActionButton icon={<Pencil size={16} />} onClick={() => {}}>
                        {'    '}
                      </ActionButton>
                      <ActionButton icon={<Trash2 size={16} />} onClick={() => {}}>
                        {'    '}
                      </ActionButton>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
