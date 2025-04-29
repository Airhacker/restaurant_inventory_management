'use client';

import { useState } from 'react';

export default function SetParLevelsPage() {
  // Form input states
  const [item, setItem] = useState('');
  const [level, setLevel] = useState('');

  // State to log par level submissions
  const [parLog, setParLog] = useState([]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Add new entry to par log
    const newEntry = {
      item,
      level,
      date: new Date().toLocaleDateString(),
    };

    setParLog((prev) => [newEntry, ...prev]);

    setItem('');
    setLevel('');
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Set Par Levels</h1>

      {/* Par Level Form */}
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow mb-10">
        <div>
          <label className="block mb-1 font-medium">Item Name</label>
          <input
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Desired Par Level</label>
          <input
            type="number"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
        >
          Set Par Level
        </button>
      </form>

      {/* Par Log Table */}
      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <h2 className="text-xl font-bold p-6 pb-0">Par Level Log</h2>

        {parLog.length > 0 ? (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Item
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Par Level
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {parLog.map((entry, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">{entry.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{entry.item}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{entry.level}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="p-6 text-gray-500">No par levels set yet.</p>
        )}
      </div>
    </div>
  );
}
