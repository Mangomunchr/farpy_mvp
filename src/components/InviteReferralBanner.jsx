import React from 'react';

const InviteReferralBanner = ({ code }) => (
  <div className="bg-blue-900 text-blue-100 text-xs text-center p-2 border-b border-blue-400">
    🎟️ Share your invite: <strong>{code}</strong> — Get bonus XP!
  </div>
);

export default InviteReferralBanner;
