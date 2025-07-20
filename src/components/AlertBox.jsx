
import React from 'react';

function AlertBox({ type = "info", children }) {
  const color = type === "success" ? "bg-green-800 border-green-600 text-green-300" :
                type === "error" ? "bg-red-800 border-red-600 text-red-300" :
                "bg-blue-800 border-blue-600 text-blue-300";

  return (
    <div className={`p-3 border-l-4 ${color} rounded text-sm`}>
      {children}
    </div>
  );
}

export default AlertBox;
