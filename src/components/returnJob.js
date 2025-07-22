const admin = require("firebase-admin");
const db = admin.firestore();

async function returnJob({ jobId, nodeId, resultURL }) {
  const jobRef = db.doc(`jobs/${jobId}`);
  const jobSnap = await jobRef.get();

  if (!jobSnap.exists || jobSnap.data().claimedBy !== nodeId) {
    throw new Error("Unauthorized or invalid job.");
  }

  await jobRef.update({
    status: "complete",
    resultURL,
    completedAt: Date.now()
  });

  const uid = jobSnap.data().uid;
  await db.doc(`vaults/ledger/${nodeId}`).set({
    xp: admin.firestore.FieldValue.increment(25),
    jobs_done: admin.firestore.FieldValue.increment(1)
  }, { merge: true });

  await db.doc(`wallets/${uid}`).update({
    lastResult: resultURL
  });

  return "Job complete and logged.";
}
module.exports = returnJob;
