import React from 'react';

const GridHeartbeatDot = ({ active }) => (
  <div className={`w-2 h-2 rounded-full ${active ? 'bg-green-400 animate-ping' : 'bg-gray-600'} inline-block`} />
);

export default GridHeartbeatDot;
