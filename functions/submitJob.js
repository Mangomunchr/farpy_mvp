const admin = require("firebase-admin");
const db = admin.firestore();

async function submitJob({ uid, description, boost = false }) {
  const userRef = db.doc(`wallets/${uid}`);
  const walletSnap = await userRef.get();
  const beans = walletSnap.exists ? walletSnap.data().coolbeans || 0 : 0;
  const cost = boost ? 10 : 1;

  if (beans < cost) throw new Error("Insufficient CoolBeans.");

  const jobRef = db.collection("jobs").doc();
  await jobRef.set({
    uid,
    description,
    createdAt: Date.now(),
    status: "queued",
    priority: boost ? "summon" : "normal"
  });

  await userRef.update({
    coolbeans: admin.firestore.FieldValue.increment(-cost)
  });

  return jobRef.id;
}
module.exports = submitJob;
