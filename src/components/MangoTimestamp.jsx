import React from 'react';

const MangoTimestamp = ({ timestamp }) => {
  const date = new Date(timestamp);
  return (
    <span className="text-xs text-gray-400">{date.toLocaleString()}</span>
  );
};

export default MangoTimestamp;
