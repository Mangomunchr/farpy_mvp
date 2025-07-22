import { useAuth } from "../context/AuthContext";
import FounderUnlockPanel from "./FounderUnlockPanel";
import VaultCastPanel from "./VaultCastPanel";
import ChaosLockToggle from "./ChaosLockToggle";

export default function FounderGate() {
  const auth = useAuth();

  // ✅ Prevent destructuring crash
  if (!auth || !auth.user) return null;

  const { user } = auth;

  if (!user.email?.endsWith("@farpy.com")) return null;

  return (
    <div className="mt-12 p-4 border border-farpy-accent">
      <h2 className="text-xl mb-2">Founder Access Only</h2>
      <VaultCastPanel />
      <ChaosLockToggle />
      <FounderUnlockPanel />
    </div>
  );
}
