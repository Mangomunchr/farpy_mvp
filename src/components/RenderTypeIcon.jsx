import React from 'react';

const RenderTypeIcon = ({ type }) => {
  const map = {
    render: '🎥',
    ai: '🧠',
    chaos: '🔥',
    music: '🎵'
  };
  return <span className="text-lg">{map[type] || '🔧'}</span>;
};

export default RenderTypeIcon;
