import React from 'react';

const InviteRewardBar = ({ invites }) => (
  <div className="text-xs text-white bg-gradient-to-r from-yellow-700 to-black rounded p-2 mt-2">
    🫂 Invites: {invites} / 5 — Reward unlocked at 5!
  </div>
);

export default InviteRewardBar;
