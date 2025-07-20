import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useBurnStatus() {
  const [burn, setBurn] = useState(0);

  const refresh = async () => {
    const res = await axios.get('http://localhost:7777/burn/status');
    setBurn(res.data.burn);
  };

  useEffect(() => {
    refresh();
  }, []);

  return { burn, refresh };
}
