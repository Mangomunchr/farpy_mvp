import React from 'react';

const NodeRankTag = ({ rank }) => {
  const colors = {
    mythic: 'text-purple-400',
    elite: 'text-blue-400',
    novice: 'text-green-400'
  };

  return (
    <span className={`text-xs font-semibold ${colors[rank] || 'text-gray-400'}`}>
      {rank.toUpperCase()} NODE
    </span>
  );
};

export default NodeRankTag;
