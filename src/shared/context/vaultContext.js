import { createContext, useContext, useState } from 'react';

const VaultContext = createContext();

export function VaultProvider({ children }) {
  const [state, setState] = useState({ xp: 0, rift: false });

  return (
    <VaultContext.Provider value={{ state, setState }}>
      {children}
    </VaultContext.Provider>
  );
}

export const useVault = () => useContext(VaultContext);
