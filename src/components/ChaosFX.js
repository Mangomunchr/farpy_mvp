
export default function ChaosFX({ active }) {
  return active ? (
    <div className="fixed inset-0 pointer-events-none z-50 bg-red-900/20 animate-pulse border-4 border-red-600" />
  ) : null;
}
