import React from 'react';

export default function CoolBeansBalance({ amount = 0 }) {
  return (
    <div className="bg-noxo-dark text-white rounded-xl p-4 shadow-md border border-yellow-500 w-full max-w-xs">
      <div className="text-xl font-bold mb-2">🫘 CoolBeans</div>
      <div className="text-3xl">{amount}</div>
    </div>
  );
}
