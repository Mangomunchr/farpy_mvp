import React from 'react';

const MangoEchoCard = ({ message }) => (
  <div className="bg-black border border-green-500 text-green-300 p-4 rounded font-mono text-xs shadow-md">
    [ECHO] {message}
  </div>
);

export default MangoEchoCard;
