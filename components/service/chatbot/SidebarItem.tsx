'use client';
import Link from 'next/link';
import { ChangeEvent, MouseEvent, KeyboardEvent, useState, useEffect, useRef } from 'react';
import { Pencil, Trash2, Folder } from 'lucide-react';
import toast from 'react-hot-toast';
import { DUMMY_CHATBOT_STORAGE } from '@/constants/chatbot_storage';

export default function SidebarGrouped() {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  const groupedByCategory = DUMMY_CHATBOT_STORAGE.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof DUMMY_CHATBOT_STORAGE>);

  const handleEditClick = (title: string, currentTitle: string) => {
    setEditingId(title);
    setEditValue(currentTitle);
  };

  const handleEditBlur = (title: string) => {
    // updateConversation(title, editValue); // 실제 API 연결 시 사용
    setEditingId(null);
    toast.success('수정되었습니다.');
  };

  const handleEditKeyDown = (e: KeyboardEvent<HTMLInputElement>, title: string) => {
    if (e.key === 'Enter') handleEditBlur(title);
  };

  const handleDelete = (title: string) => {
    // deleteConversation(title); // 실제 API 연결 시 사용
    toast.success('삭제되었습니다.');
  };

  useEffect(() => {
    if (editingId && inputRef.current) inputRef.current.focus();
  }, [editingId]);

  return (
    <div className="p-4">
      {Object.entries(groupedByCategory).map(([category, items]) => (
        <div key={category} className="mb-6">
          <div className="text-lg font-bold text-brown-800 mb-2 flex items-center">
            <Folder className="mr-2 w-5 h-5" /> {category}
          </div>
          <ul className="space-y-2">
            {items.map((item) => (
              <li key={item.title} className="flex justify-between items-center text-brown-700">
                <div>
                  <span className="font-medium text-sm">[{item.date}]</span>{' '}
                  {editingId === item.title ? (
                    <input
                      ref={inputRef}
                      value={editValue}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => setEditValue(e.target.value)}
                      onBlur={() => handleEditBlur(item.title)}
                      onKeyDown={(e) => handleEditKeyDown(e, item.title)}
                      className="border rounded px-2 py-0.5 text-sm"
                    />
                  ) : (
                    <span className="ml-1 text-sm">{item.title}</span>
                  )}
                </div>
                <div className="flex gap-2">
                  <Pencil
                    className="w-4 h-4 cursor-pointer"
                    onClick={() => handleEditClick(item.title, item.title)}
                  />
                  <Trash2
                    className="w-4 h-4 cursor-pointer text-red-500"
                    onClick={() => handleDelete(item.title)}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
