import { useState } from "react";

export default function InviteLink({ userId = "live-client" }) {
  const [link] = useState(`${window.location.origin}/?ref=${userId}`);
  return (
    <div>
      <h4>Referral Link</h4>
      <input type="text" value={link} readOnly />
    </div>
  );
}
