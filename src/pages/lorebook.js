
const LORE = [
  {
    category: "🌋 Rituals",
    entries: [
      ["Burning", "You contribute Mango to the Vault. This gains you XP and influence."],
      ["Claiming", "You extract Mango. The Vault favors those who’ve burned more than they take."],
      ["Streaks", "Daily actions increase your streak, earning more XP over time."]
    ]
  },
  {
    category: "🌀 Roles",
    entries: [
      ["Rendar", "The base user — initiates who’ve just begun."],
      ["NodeMonk", "A respected Vault builder — they maintain discipline and order."],
      ["Chaosborn", "Those who’ve unlocked forbidden Mango through rituals."]
    ]
  },
  {
    category: "🍋 The Vault",
    entries: [
      ["Weather", "Mango Monsoon and Heatwave states affect the Vault’s behavior."],
      ["Legacy Score", "Determined by your XP and participation across rituals."],
      ["Mango Lock", "Limits actions until you complete your onboarding or minimum XP."]
    ]
  }
];

export default function VaultLorebook() {
  return (
    <div className="p-6 max-w-3xl mx-auto text-noxo-primary">
      <h1 className="text-2xl font-bold mb-4">📖 Vault Lorebook</h1>
      {LORE.map(section => (
        <div key={section.category} className="mb-6">
          <h2 className="text-lg font-semibold text-noxo-accent mb-2">{section.category}</h2>
          <ul className="space-y-1 text-sm">
            {section.entries.map(([term, desc]) => (
              <li key={term}>
                <strong>{term}:</strong> {desc}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
