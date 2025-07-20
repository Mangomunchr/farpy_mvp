import React from 'react';
import MangoTimestamp from './MangoTimestamp';

const PatchNoteCard = ({ title, desc, timestamp }) => (
  <div className="bg-gray-900 p-4 rounded border border-yellow-500 text-white space-y-2">
    <h3 className="text-lg font-bold text-yellow-300">{title}</h3>
    <p className="text-sm">{desc}</p>
    <MangoTimestamp timestamp={timestamp} />
  </div>
);

export default PatchNoteCard;
