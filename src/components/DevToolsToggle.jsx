import React, { useState } from 'react';

const DevToolsToggle = ({ children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="fixed bottom-2 right-2 z-50 text-xs text-white">
      <button onClick={() => setVisible(!visible)} className="bg-gray-700 px-2 py-1 rounded hover:bg-gray-600">
        DevTools
      </button>
      {visible && (
        <div className="mt-2 bg-black border border-yellow-600 p-2 rounded max-w-xs">
          {children}
        </div>
      )}
    </div>
  );
};

export default DevToolsToggle;
