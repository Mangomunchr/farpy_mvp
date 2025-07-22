import React from 'react';

const MangoLoreCard = ({ title, text }) => (
  <div className="bg-yellow-950 text-yellow-200 border border-yellow-700 p-4 rounded max-w-sm shadow-sm">
    <h3 className="font-bold text-sm mb-1">{title}</h3>
    <p className="text-xs">{text}</p>
  </div>
);

export default MangoLoreCard;
