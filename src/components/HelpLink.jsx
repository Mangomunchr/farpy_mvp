
import React from 'react';

function HelpLink({ text, href }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline text-sm">
      ❓ {text}
    </a>
  );
}

export default HelpLink;
