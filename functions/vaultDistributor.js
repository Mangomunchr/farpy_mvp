const admin = require("firebase-admin");
const db = admin.firestore();

async function vaultDistributor() {
  const vaultTotal = 4200; // Example vault pool USD
  const ledgerSnap = await db.collection("vaults/ledger").get();

  let totalXP = 0;
  const payouts = [];

  ledgerSnap.forEach(doc => {
    const data = doc.data();
    totalXP += data.xp || 0;
  });

  ledgerSnap.forEach(doc => {
    const data = doc.data();
    const share = (data.xp || 0) / totalXP;
    const payout = parseFloat((vaultTotal * share).toFixed(2));
    payouts.push({ nodeId: doc.id, payout });
    db.doc(`wallets/${doc.id}`).set({
      usd: admin.firestore.FieldValue.increment(payout)
    }, { merge: true });
  });

  return payouts;
}
module.exports = vaultDistributor;
