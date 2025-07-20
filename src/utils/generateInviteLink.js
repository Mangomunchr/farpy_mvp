
export function generateInviteLink(userId) {
  return \`\${window.location.origin}/register?ref=\${userId}\`;
}
