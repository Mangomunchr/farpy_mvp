import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useVaultMemory() {
  const [log, setLog] = useState([]);

  const fetchLog = async () => {
    const res = await axios.get('http://localhost:7777/vault/memory');
    setLog(res.data);
  };

  const pushLog = async (entry) => {
    await axios.post('http://localhost:7777/vault/write', { entry });
    fetchLog();
  };

  useEffect(() => {
    fetchLog();
  }, []);

  return { log, pushLog };
}
