
import React, { useEffect, useState } from 'react';
import XPTracker from '../components/XPTracker';
import CreditBalanceDisplay from '../components/CreditBalanceDisplay';
import UserStatsCard from '../components/UserStatsCard';
import MinimalJobList from '../components/MinimalJobList';
import ConnectionStatusIndicator from '../components/ConnectionStatusIndicator';
import { getXP } from '../utils/xp';
import { getJobs } from '../utils/jobs';

function Dashboard() {
  const [xp, setXP] = useState(0);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setXP(getXP());
    setJobs(getJobs());
  }, []);

  return (
    <div className="p-6 space-y-4">
      <XPTracker xp={xp} level={Math.floor(xp / 1000)} rankTitle="Renderling" />
      <CreditBalanceDisplay credits={13} />
      <UserStatsCard xp={xp} level={Math.floor(xp / 1000)} uptime={91} jobsCompleted={jobs.length} />
      <MinimalJobList jobs={jobs} />
      <ConnectionStatusIndicator online={true} />
    </div>
  );
}

export default Dashboard;
