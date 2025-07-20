
export default function MangoLock({ locked }) {
  if (!locked) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center text-noxo-primary text-center">
      <h1 className="text-3xl font-bold mb-4">🔒 MANGO LOCK</h1>
      <p className="max-w-sm mb-6 text-sm">
        You must complete the initial rituals before accessing the Vault.
      </p>
      <div className="text-xs text-noxo-accent italic">"The Vault opens only to those who give."</div>
    </div>
  );
}
