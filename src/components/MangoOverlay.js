
export default function MangoOverlay({ active }) {
  return (
    active && (
      <div className="fixed inset-0 pointer-events-none z-50 bg-gradient-to-br from-noxo-accent/10 via-noxo-accent/20 to-transparent animate-pulse" />
    )
  );
}
