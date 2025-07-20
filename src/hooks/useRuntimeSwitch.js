import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useRuntimeSwitch() {
  const [mode, setMode] = useState("idle");

  const refresh = async () => {
    const res = await axios.get("http://localhost:7777/runtime/status");
    setMode(res.data.mode);
  };

  const toggle = async (next) => {
    await axios.post("http://localhost:7777/runtime/switch", { mode: next });
    refresh();
  };

  useEffect(() => {
    refresh();
  }, []);

  return { mode, toggle };
}
