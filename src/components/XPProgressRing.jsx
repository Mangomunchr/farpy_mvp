import React from 'react';

export default function XPProgressRing({ xp = 0, goal = 1000 }) {
  const percentage = Math.min(100, Math.round((xp / goal) * 100));

  return (
    <div className="relative w-24 h-24">
      <svg className="absolute top-0 left-0 w-full h-full">
        <circle
          className="text-gray-300"
          strokeWidth="8"
          stroke="currentColor"
          fill="transparent"
          r="36"
          cx="48"
          cy="48"
        />
        <circle
          className="text-orange-500"
          strokeWidth="8"
          strokeDasharray="226.2"
          strokeDashoffset={(1 - percentage / 100) * 226.2}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r="36"
          cx="48"
          cy="48"
        />
      </svg>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white font-bold text-sm">
        {percentage}%
      </div>
    </div>
  );
}
