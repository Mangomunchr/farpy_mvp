
export function getJobs() {
  const stored = localStorage.getItem('jobs');
  return stored ? JSON.parse(stored) : [];
}

export function submitJob(prompt) {
  const jobs = getJobs();
  const newJob = {
    id: `job-${Date.now()}`,
    prompt,
    time: new Date().toISOString(),
    status: 'Completed'
  };
  const updated = [newJob, ...jobs].slice(0, 10);
  localStorage.setItem('jobs', JSON.stringify(updated));
  return newJob;
}
