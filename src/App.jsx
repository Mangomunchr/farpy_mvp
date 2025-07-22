import FarpyLayout from "./components/FarpyLayout";
import VaultBlessingBanner from "./components/VaultBlessingBanner";
import ChaosTokenReveal from "./components/ChaosTokenReveal";
import LiveLeaderboard from "./components/LiveLeaderboard";
import FarpyDashboard from "./components/FarpyDashboard";
import FounderGate from "./components/FounderGate";

export default function App() {
  return (
    <FarpyLayout>
      <VaultBlessingBanner />
      <ChaosTokenReveal />
      <LiveLeaderboard />
      <FarpyDashboard />
      <FounderGate />
    </FarpyLayout>
  );
}
