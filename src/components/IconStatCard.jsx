
import React from 'react';

function IconStatCard({ icon, label, value }) {
  return (
    <div className="bg-zinc-900 p-4 rounded-xl text-white text-sm border border-zinc-700 text-center">
      <div className="text-2xl mb-2">{icon}</div>
      <div className="text-zinc-300">{label}</div>
      <div className="text-lg font-bold">{value}</div>
    </div>
  );
}

export default IconStatCard;
