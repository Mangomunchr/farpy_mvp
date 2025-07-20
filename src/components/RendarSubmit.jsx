export default function RendarSubmit() {
  return (
    <div className="border p-4 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-2">Rendar Job Submit</h2>
      <input className="block border mb-2 p-2 w-full" placeholder="Job Name" />
      <select className="block border mb-2 p-2 w-full">
        <option>Speed: 1x</option>
        <option disabled>2x (locked)</option>
        <option disabled>5x (locked)</option>
      </select>
      <input className="block border mb-2 p-2 w-full" type="datetime-local" />
      <textarea className="block border mb-2 p-2 w-full" placeholder="Job Notes or Description" />
      <button className="bg-green-600 text-white px-4 py-2 rounded">Submit Job</button>
    </div>
  );
}
