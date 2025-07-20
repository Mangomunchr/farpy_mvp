import React, { useState, useEffect } from 'react';

const CreditBalance = () => {
  const [credits, setCredits] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem('farpy_credits');
    if (stored) setCredits(parseFloat(stored));
  }, []);

  return (
    <div className="text-right text-sm text-yellow-400">
      🔸 Credits: {credits.toFixed(2)}
    </div>
  );
};

export default CreditBalance;
