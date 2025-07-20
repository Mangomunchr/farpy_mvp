import React, { useEffect, useState } from 'react';

const Invite = () => {
  const [inviteCode, setInviteCode] = useState('');

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const code = query.get('ref');
    if (code) {
      setInviteCode(code);
      localStorage.setItem('farpy_invite', code);
    }
  }, []);

  return (
    <div className="text-center p-6 text-white">
      <h1 className="text-3xl font-bold mb-4">🔗 Invite System</h1>
      <p className="mb-2">Your referrer: <strong>{inviteCode || "None detected"}</strong></p>
      <p className="text-gray-400">This feature will reward bonus XP or credit in future updates.</p>
    </div>
  );
};

export default Invite;
