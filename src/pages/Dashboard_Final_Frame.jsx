import React from 'react';
import XPStatsCard from '../components/XPStatsCard';
import CoolBeansBalance from '../components/CoolBeansBalance';
import GridStatusBar from '../components/GridStatusBar';
import MiniStatGrid from '../components/MiniStatGrid';
import JobSubmissionPanel from '../components/JobSubmissionPanel';
import NodeMonkStatusPanel from '../components/NodeMonkStatusPanel';
import LiveFeedLog from '../components/LiveFeedLog';
import ReferralTrackerPanel from '../components/ReferralTrackerPanel';
import ChaosStatusBar from '../components/ChaosStatusBar';
import PatchNoteTicker from '../components/PatchNoteTicker';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-8 space-y-6">
      <header className="text-3xl font-bold text-noxo-primary text-center mb-4">
        ⚡ Farpy Grid Console
      </header>

      <MiniStatGrid xp={4200} beans={120} jobs={37} />
      <div className="flex flex-wrap justify-center gap-6">
        <XPStatsCard xp={4200} />
        <CoolBeansBalance amount={120} />
        <GridStatusBar isConnected={true} />
      </div>

      <ChaosStatusBar isChaosActive={true} />
      <JobSubmissionPanel onSubmit={(prompt) => console.log("Prompt:", prompt)} />
      <NodeMonkStatusPanel jobsRunning={2} earnings={19.84} />
      <ReferralTrackerPanel invites={3} bonusXP={300} />
      <LiveFeedLog logs={["Job #231 claimed by NodeMonk42", "Vault reward dispatched"]} />
      <PatchNoteTicker notes={["Vault now pays daily", "Chaos Button added", "Leaderboard system updated"]} />
    </div>
  );
}
