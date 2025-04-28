'use client';

import { useState } from 'react';

export default function SetParLevelsPage() {
  const [item, setItem] = useState('');
  const [level, setLevel] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Par level set: ${item} ➔ ${level}`);
    setItem('');
    setLevel('');
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Set Par Levels</h1>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow">
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

        <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
          Set Par Level
        </button>
      </form>
    </div>
  );
}
