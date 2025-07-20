import React from 'react';
import RoleBadge from './RoleBadge';

const RoleHeader = ({ username, role }) => (
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-lg font-semibold text-white">{username}</h2>
    <RoleBadge role={role} />
  </div>
);

export default RoleHeader;
