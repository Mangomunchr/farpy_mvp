
// Placeholder API functions for job submit, status, XP etc.

export async function submitJob(prompt) {
  // TODO: Wire to backend
  console.log("Submitting job:", prompt);
  return { success: true };
}

export async function getUserStats() {
  return {
    xp: 4200,
    level: 4,
    credits: 13,
    uptime: 92,
    jobsCompleted: 38
  };
}
