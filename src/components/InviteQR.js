
import QRCode from 'qrcode.react';

export default function InviteQR({ code }) {
  const inviteURL = \`\${window.location.origin}/register?ref=\${code}\`;

  return (
    <div className="bg-white p-2 rounded">
      <QRCode value={inviteURL} size={128} />
      <p className="text-xs mt-2 text-center break-all">{inviteURL}</p>
    </div>
  );
}
