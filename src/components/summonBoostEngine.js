const admin = require("firebase-admin");
const db = admin.firestore();

async function summonBoostEngine() {
  const queueSnap = await db.collection("jobs")
    .where("status", "==", "queued")
    .get();

  const boosted = [];
  queueSnap.forEach(doc => {
    const job = doc.data();
    if (job.priority === "summon") {
      boosted.push({ id: doc.id, ...job });
    }
  });

  // Prioritize boosted jobs by timestamp
  boosted.sort((a, b) => a.createdAt - b.createdAt);
  return boosted;
}
module.exports = summonBoostEngine;
