import React from 'react';

const DailyLimitNotice = ({ remaining }) => (
  <div className="text-xs text-yellow-400 mt-2">
    ⚠️ Remaining daily rituals: {remaining}
  </div>
);

export default DailyLimitNotice;
