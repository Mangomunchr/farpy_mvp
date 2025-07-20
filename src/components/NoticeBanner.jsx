
import React from 'react';

function NoticeBanner({ message }) {
  return (
    <div className="bg-blue-900 border border-blue-500 text-blue-200 p-3 rounded-xl text-center text-sm">
      📣 {message}
    </div>
  );
}

export default NoticeBanner;
