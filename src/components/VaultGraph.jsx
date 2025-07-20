import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';

Chart.register(LineElement, PointElement, LinearScale, Title, CategoryScale);

const VaultGraph = () => {
  const [dataPoints, setDataPoints] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('vault_history') || '[]');
    setDataPoints(stored);
  }, []);

  const data = {
    labels: dataPoints.map((_, i) => `T-${dataPoints.length - i}`),
    datasets: [
      {
        label: 'Vault Growth',
        data: dataPoints,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: { color: 'white' },
      },
    },
    scales: {
      x: {
        ticks: { color: 'white' },
        grid: { color: '#444' },
      },
      y: {
        ticks: { color: 'white' },
        grid: { color: '#444' },
      },
    },
  };

  return (
    <div className="p-6 max-w-3xl mx-auto text-white">
      <h1 className="text-2xl font-bold mb-4">📈 Vault Analytics</h1>
      <Line data={data} options={options} />
    </div>
  );
};

export default VaultGraph;
