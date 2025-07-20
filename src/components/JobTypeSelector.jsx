import React from 'react';

const JobTypeSelector = ({ type, setType }) => (
  <div className="mb-2">
    <label className="text-sm text-white mr-2">Job Type:</label>
    <select
      value={type}
      onChange={(e) => setType(e.target.value)}
      className="p-1 text-black rounded"
    >
      <option value="render">Render</option>
      <option value="ai">AI</option>
      <option value="music">Music</option>
      <option value="chaos">Chaos</option>
    </select>
  </div>
);

export default JobTypeSelector;
