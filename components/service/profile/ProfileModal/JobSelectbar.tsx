'use client';

import React, { useState } from 'react';

type Job = (typeof jobs)[number];

const jobs = [
  '사무직',
  '연구·개발직',
  '서비스직',
  '생산직',
  '공무원',
  '프리랜서',
  '자영업자',
  '군인',
  '취업 준비생',
  '대학생',
  '고등학생 이하',
  '무직',
  '기타',
] as const;

export default function Selectbar() {
  const [selectedJob, setSelectedJob] = useState<Job | ''>('');

  return (
    <div className="space-y-2">
      <label htmlFor="job-select" className="text-lg font-bold text-[#5c3a1e]">
        직업
      </label>
      <div className="space-y-2"></div>

      <select
        id="job-select"
        value={selectedJob}
        onChange={(e) => setSelectedJob(e.target.value as Job)}
        aria-label="직업 선택"
        className="w-full h-8 rounded border border-[#ddd] bg-[#fef5e9] text-[#cbbba4] text-base px-3 placeholder:text-[#cbbba4] shadow-sm focus:outline-none focus:ring-1 focus:ring-[#D1D5DB]"
      >
        <option value="">직업을 선택하세요.</option>
        {jobs.map((job) => (
          <option key={job} value={job} className="text-[#5c3a1e]">
            {job}
          </option>
        ))}
      </select>
    </div>
  );
}
