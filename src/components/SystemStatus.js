
export default function SystemStatus({ online, vaultTotal }) {
  return (
    <div className="flex gap-4 items-center text-xs border border-noxo-accent p-2 rounded mt-4">
      <div>🟢 System: {online ? 'Online' : 'Offline'}</div>
      <div>🍋 Vault: {vaultTotal} MANGO</div>
    </div>
  );
}
