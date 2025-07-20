import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useNodeMunchers() {
  const [monks, setMonks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:7777/nodemunch/top').then(res => {
      setMonks(res.data);
    });
  }, []);

  return monks;
}
