import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useBootFlag() {
  const [booted, setBooted] = useState(false);

  const check = async () => {
    const res = await axios.get("http://localhost:7777/boot/status");
    setBooted(res.data.booted);
  };

  const trigger = async () => {
    await axios.post("http://localhost:7777/boot/trigger");
    check();
  };

  useEffect(() => {
    check();
  }, []);

  return { booted, trigger };
}
