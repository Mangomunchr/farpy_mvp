export default function VaultBlessingBanner({ message = "✨ The Vault is Watching You. Earn Wisely." }) {
  return (
    <div className="text-center py-2 px-4 bg-farpy-accent text-black font-mono animate-pulse rounded">
      {message}
    </div>
  );
}
