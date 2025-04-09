import { MessageSquare, Plus } from 'lucide-react';

export const DUMMY_CHATBOT_STORAGE = [
  { category: '파이썬', date: '2025.02.06', title: '피드백 - PCCE 자격증' },
  { category: '파이썬', date: '2025.04.01', title: '로드맵 추천 - 알고리즘' },
  { category: '영어', date: '2025.03.01', title: '로드맵 추천 - 문법' },
  { category: '영어', date: '2025.04.08', title: '멘탈케어 - 단어 암기' },
  { category: '운동', date: '2025.02.07', title: '멘탈 케어 - 자존감' },
  { category: '운동', date: '2025.03.05', title: '로드맵 추천 - 하체' },
];

export const DUMMY_PREVIOUS_CONVERSATIONS = [
  {
    id: 'new',
    label: '새로운 대화',
    iconName: 'Plus',
    href: '/',
  },
  {
    id: '1',
    label: '새로운 긴 대화 예시입니다. 새로운 긴 대화 예시입니다. 새로운 긴 대화 예시입니다.',
    iconName: 'MessageSquare',
    href: '/conversations/1',
  },
  {
    id: '2',
    label: '일반 대화 예시입니다.',
    iconName: 'MessageSquare',
    href: '/conversations/2',
  },
];
