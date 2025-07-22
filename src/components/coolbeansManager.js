const admin = require("firebase-admin");
const db = admin.firestore();

async function adjustCoolBeans(uid, delta) {
  const ref = db.doc(`wallets/${uid}`);
  await ref.set({
    coolbeans: admin.firestore.FieldValue.increment(delta)
  }, { merge: true });
}

async function getCoolBeans(uid) {
  const snap = await db.doc(`wallets/${uid}`).get();
  return snap.exists ? (snap.data().coolbeans || 0) : 0;
}

module.exports = { adjustCoolBeans, getCoolBeans };
