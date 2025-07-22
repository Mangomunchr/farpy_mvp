
import React from 'react';

function ToastNotification({ message, type = "info" }) {
  const color = type === "success" ? "bg-green-600" :
                type === "error" ? "bg-red-600" : "bg-zinc-700";

  return (
    <div className={`fixed bottom-4 right-4 p-3 rounded-lg text-white ${color} shadow-xl z-50`}>
      {message}
    </div>
  );
}

export default ToastNotification;
