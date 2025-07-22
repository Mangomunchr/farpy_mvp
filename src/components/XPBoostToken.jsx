import React from 'react';

const XPBoostToken = ({ active }) => (
  <div className={`text-xs px-2 py-1 rounded-full font-semibold ${
    active ? 'bg-green-500 text-black' : 'bg-gray-700 text-gray-400'
  }`}>
    ⚡ XP Boost {active ? 'Active' : 'Inactive'}
  </div>
);

export default XPBoostToken;
