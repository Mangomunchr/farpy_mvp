const admin = require("firebase-admin");
const db = admin.firestore();

async function claimJob({ nodeId }) {
  const queued = await db.collection("jobs")
    .where("status", "==", "queued")
    .orderBy("priority", "desc")
    .limit(1)
    .get();

  if (queued.empty) return null;

  const jobDoc = queued.docs[0];
  await jobDoc.ref.update({
    status: "claimed",
    claimedBy: nodeId,
    claimedAt: Date.now()
  });

  return { jobId: jobDoc.id, ...jobDoc.data() };
}
module.exports = claimJob;
