import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useVaultAPI() {
  const [status, setStatus] = useState(null);

  const fetchStatus = async () => {
    const res = await axios.get('http://localhost:7777/vault/status');
    setStatus(res.data);
  };

  const gainXP = async () => {
    const res = await axios.post('http://localhost:7777/vault/gain-xp');
    setStatus(prev => ({ ...prev, xp: res.data.xp }));
  };

  const mutateChaos = async () => {
    const res = await axios.post('http://localhost:7777/vault/mutate');
    setStatus(prev => ({ ...prev, chaosLevel: res.data.chaosLevel }));
  };

  useEffect(() => {
    fetchStatus();
  }, []);

  return { status, gainXP, mutateChaos };
}
