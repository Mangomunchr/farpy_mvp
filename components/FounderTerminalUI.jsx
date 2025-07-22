// Founder Terminal Controls
export default function FounderTerminalUI({ config }) {
  return (
    <div>
      <h3>Vault Margin: {config.vault_margin * 100}%</h3>
      <button>Override Referral Cap</button>
      <button>Freeze Beans</button>
    </div>
  );
}
