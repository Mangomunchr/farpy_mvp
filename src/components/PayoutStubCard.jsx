
import React from 'react';

function PayoutStubCard({ credits = 3.42 }) {
  return (
    <div className="bg-black border border-green-600 text-green-400 text-sm rounded-xl p-4 text-center">
      💸 Est. Payout: <strong>${credits.toFixed(2)}</strong>
    </div>
  );
}

export default PayoutStubCard;
