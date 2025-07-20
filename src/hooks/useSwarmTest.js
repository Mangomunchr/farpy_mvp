import { useState } from 'react';
import axios from 'axios';

export default function useSwarmTest() {
  const [shards, setShards] = useState([]);

  const dispatch = async () => {
    const res = await axios.post('http://localhost:7777/sauran/swarm', {
      task: {
        type: "Render-A",
        intensity: 2,
        shardCount: 3
      }
    });
    setShards(res.data.shards);
  };

  return { shards, dispatch };
}
