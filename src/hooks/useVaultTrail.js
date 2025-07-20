import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useVaultTrail() {
  const [trail, setTrail] = useState([]);

  const fetch = async () => {
    const res = await axios.get('http://localhost:7777/trail');
    setTrail(res.data);
  };

  const log = async (entry) => {
    await axios.post('http://localhost:7777/trail/add', entry);
    fetch();
  };

  useEffect(() => {
    fetch();
  }, []);

  return { trail, log };
}
