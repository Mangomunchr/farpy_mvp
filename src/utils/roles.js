
export function setRole(role) {
  localStorage.setItem('user_role', role);
}

export function getRole() {
  return localStorage.getItem('user_role') || 'rendar';
}
