import React from 'react';

const NodeClassBadge = ({ type }) => {
  const styles = {
    monk: 'bg-blue-800 text-white',
    rendar: 'bg-green-800 text-white',
    chaos: 'bg-pink-700 text-white'
  };

  return (
    <span className={\`text-xs px-2 py-1 rounded \${styles[type] || 'bg-gray-600 text-white'}\`}>
      {type.toUpperCase()}
    </span>
  );
};

export default NodeClassBadge;
