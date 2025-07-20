
import { useEffect, useState } from 'react';

export default function Toast({ message, duration = 3000 }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);
      const timeout = setTimeout(() => setVisible(false), duration);
      return () => clearTimeout(timeout);
    }
  }, [message]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-noxo-accent text-black px-4 py-2 rounded z-50 text-sm shadow-xl">
      {message}
    </div>
  );
}
