import axios from 'axios';

export default async function useVaultClaim(id, summon = 1) {
  const res = await axios.post("http://localhost:7777/vaultcut/claim", {
    id,
    summon
  });
  return res.data;
}
