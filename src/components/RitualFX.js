
import { useEffect, useState } from 'react';

export default function RitualFX({ trigger, type = 'burn' }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (trigger) {
      setShow(true);
      const timeout = setTimeout(() => setShow(false), 1800);
      return () => clearTimeout(timeout);
    }
  }, [trigger]);

  const style = type === 'burn'
    ? 'bg-red-600/60 animate-pulse border-4 border-orange-500 shadow-xl'
    : 'bg-green-400/40 animate-bounce border-4 border-lime-300 shadow-md';

  return show ? (
    <div className={\`fixed inset-0 z-50 pointer-events-none flex items-center justify-center text-5xl text-white \`}>
      <div className={\`rounded-full w-64 h-64 flex items-center justify-center \${style}\`}>
        {type === 'burn' ? '🔥 RITUAL' : '🎁 CLAIMED'}
      </div>
    </div>
  ) : null;
}
