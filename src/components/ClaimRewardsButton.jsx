import React from 'react';

export default function ClaimRewardsButton({ amount }) {
  return (
    <button
      className="bg-noxo-primary hover:bg-noxo-accent text-black px-6 py-3 rounded-xl font-bold text-lg w-full"
      onClick={() => alert(`Claimed $${amount.toFixed(2)}!`)}
    >
      💰 Claim ${amount.toFixed(2)}
    </button>
  );
}
