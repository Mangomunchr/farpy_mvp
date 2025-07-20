import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useChaosLock() {
  const [lock, setLock] = useState({ locked: false });

  const refresh = async () => {
    const res = await axios.get('http://localhost:7777/chaos/status');
    setLock(res.data);
  };

  useEffect(() => {
    refresh();
  }, []);

  return { lock, refresh };
}
