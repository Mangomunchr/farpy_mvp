
import React from 'react';
import XPTracker from '../components/XPTracker';
import CreditBalanceDisplay from '../components/CreditBalanceDisplay';
import LiveFeedLog from '../components/LiveFeedLog';
import UserStatsCard from '../components/UserStatsCard';
import MinimalJobList from '../components/MinimalJobList';
import ConnectionStatusIndicator from '../components/ConnectionStatusIndicator';

function Dashboard() {
  return (
    <div className="p-6 space-y-4">
      <XPTracker xp={4200} level={4} rankTitle="Grid Goblin" />
      <CreditBalanceDisplay credits={13} />
      <UserStatsCard xp={4200} level={4} uptime={92} jobsCompleted={38} />
      <LiveFeedLog />
      <MinimalJobList />
      <ConnectionStatusIndicator online={true} />
    </div>
  );
}

export default Dashboard;
