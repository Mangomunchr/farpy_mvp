import { useState, useEffect } from "react";

export default function useVaultTrigger(xp = 0, referrals = 0) {
  const [vaultOpen, setVaultOpen] = useState(false);

  useEffect(() => {
    if (xp >= 1000 && referrals >= 5) {
      setVaultOpen(true);
    }
  }, [xp, referrals]);

  return vaultOpen;
}
