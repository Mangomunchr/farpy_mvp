import { useState } from 'react';

export default function useRitualConsole() {
  const [log, setLog] = useState([]);

  const trigger = (command) => {
    const timestamp = new Date().toLocaleTimeString();
    const entry = \`\${timestamp} → ⚡ \${command}\`;
    setLog(prev => [entry, ...prev].slice(0, 10));
  };

  return { log, trigger };
}
