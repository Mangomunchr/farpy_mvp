import React from 'react';

const NodeTagBadge = ({ tag }) => (
  <span className="px-2 py-1 bg-green-800 text-green-100 text-xs rounded-full border border-green-400">
    🧘 {tag.toUpperCase()}
  </span>
);

export default NodeTagBadge;
