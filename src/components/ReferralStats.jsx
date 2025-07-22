// Referral XP/Bonus Placeholder
export default function ReferralStats({ referrals = 3, bonus = 1.5 }) {
  return (
    <div>
      <h4>Referrals: {referrals}</h4>
      <p>Bonus XP Multiplier: x{bonus}</p>
    </div>
  );
}
