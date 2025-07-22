import React from 'react';

export default function CreditBalanceBar({ balance = 0 }) {
  return (
    <div className="bg-noxo-dark border border-noxo-primary rounded-full overflow-hidden h-6 w-full max-w-md my-4">
      <div
        className="bg-green-500 h-full text-xs flex items-center justify-center text-black font-bold"
        style={{ width: Math.min(100, balance) + '%' }}
      >
        💰 {balance} CoolBeans
      </div>
    </div>
  );
}
