import React from 'react';

const ChaosSummonBanner = ({ visible }) => (
  visible ? (
    <div className="bg-pink-800 text-white text-center p-2 text-xs font-bold border-t border-pink-600">
      ⚠️ CHAOS SUMMONED — Grid instability rising
    </div>
  ) : null
);

export default ChaosSummonBanner;
