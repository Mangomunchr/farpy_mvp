import React from 'react';

const SystemStatusPill = ({ status }) => {
  const colors = {
    online: 'bg-green-600',
    degraded: 'bg-yellow-500',
    offline: 'bg-red-600'
  };

  return (
    <div className={`inline-block px-3 py-1 text-xs text-white rounded-full ${colors[status] || 'bg-gray-500'}`}>
      {status.toUpperCase()}
    </div>
  );
};

export default SystemStatusPill;
