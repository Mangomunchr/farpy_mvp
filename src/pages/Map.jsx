import React from 'react';

const dummyNodes = [
  { id: '001', name: 'NodeMonk-X', role: 'monk', lat: 36.1, lng: -115.2 },
  { id: '002', name: 'Rendar-Y', role: 'rendar', lat: 40.7, lng: -74.0 }
];

const Map = () => (
  <div className="p-4 text-noxo-primary">
    <h1 className="text-xl font-bold mb-2">🗺️ NodeMap (Simplified)</h1>
    <ul className="text-sm space-y-1">
      {dummyNodes.map(n => (
        <li key={n.id}>📍 {n.name} — {n.role.toUpperCase()} @ [{n.lat}, {n.lng}]</li>
      ))}
    </ul>
  </div>
);

export default Map;
