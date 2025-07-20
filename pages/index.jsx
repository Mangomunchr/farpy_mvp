import RendarSubmit from '../components/RendarSubmit';
import NodeMonkLog from '../components/NodeMonkLog';
import VaultDisplay from '../components/VaultDisplay';

export default function Home() {
  return (
    <div className="p-4 space-y-6">
      <RendarSubmit />
      <NodeMonkLog />
      <VaultDisplay />
    </div>
  );
}
