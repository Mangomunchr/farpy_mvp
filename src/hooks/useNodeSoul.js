import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useNodeSoul(id) {
  const [memory, setMemory] = useState([]);

  const fetch = async () => {
    const res = await axios.get(\`http://localhost:7777/soul/\${id}\`);
    setMemory(res.data);
  };

  const imprint = async (action) => {
    await axios.post('http://localhost:7777/soul/add', { id, action });
    fetch();
  };

  useEffect(() => {
    fetch();
  }, []);

  return { memory, imprint };
}
