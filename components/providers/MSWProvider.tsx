'use client';

import { ReactNode } from 'react';
import mockEnable from '@/mocks/index.js';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'false') {
  mockEnable();
}

export function MSWProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
