import React from 'react';

const RoleBadge = ({ role }) => {
  const color = role === 'NodeMonk' ? 'bg-green-700' : 'bg-orange-600';
  return (
    <span className={`text-xs text-white px-2 py-1 rounded ${color}`}>
      {role}
    </span>
  );
};

export default RoleBadge;
