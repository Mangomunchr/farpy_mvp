
export default function BurnClaimUX({ type }) {
  const instructions = {
    burn: {
      title: '🔥 Burn Mango',
      message: 'Burning contributes to the Vault. You gain XP. This is a sacred action.',
    },
    claim: {
      title: '🎁 Claim Mango',
      message: 'You may claim Mango from the Vault — only if your legacy permits.',
    }
  };

  const { title, message } = instructions[type];

  return (
    <div className="mb-6 text-noxo-primary">
      <h2 className="text-lg font-bold mb-1">{title}</h2>
      <p className="text-sm text-noxo-accent italic">{message}</p>
    </div>
  );
}
