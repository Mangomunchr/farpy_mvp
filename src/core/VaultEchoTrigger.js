export function triggerOverride(setEchoLog) {
  const time = new Date().toLocaleTimeString();
  const msg = `⚠️ Override initiated at ${time}`;
  setEchoLog(prev => [msg, ...prev.slice(0, 9)]);
}
