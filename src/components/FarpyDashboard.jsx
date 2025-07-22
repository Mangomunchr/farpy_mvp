import { useState } from "react";
import CoolBeanWallet from "./CoolBeanWallet";
import VaultTracker from "./VaultTracker";
import JobSubmitter from "./JobSubmitter";
import NodeMuncherPanel from "./NodeMuncherPanel";
import useUserData from "../hooks/useUserData";

export default function FarpyDashboard() {
  const { xp, beans } = useUserData("live-client");
  const [tab, setTab] = useState("job");

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      <div className="flex gap-2 justify-center text-sm sm:text-base">
        <button onClick={() => setTab("job")}>Render Job</button>
        <button onClick={() => setTab("node")}>Node Panel</button>
        <button onClick={() => setTab("wallet")}>Wallet</button>
        <button onClick={() => setTab("xp")}>Vault XP</button>
      </div>
      <div className="border-t pt-4">
        {tab === "job" && <JobSubmitter />}
        {tab === "node" && <NodeMuncherPanel />}
        {tab === "wallet" && <CoolBeanWallet balance={beans} />}
        {tab === "xp" && <VaultTracker xp={xp} />}
      </div>
    </div>
  );
}
