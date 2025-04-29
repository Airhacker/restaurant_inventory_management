'use client';

import { useState } from 'react';
import { foodUsageData } from '../../lib/data';
import { toast } from 'sonner';

export default function FoodUsagePage() {
  const [usage, setUsage] = useState(foodUsageData);
  const [item, setItem] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // make sure item and quantity are not empty
    if (!item || !quantity) return;

    const newEntry = {
      item,
      quantity,
      date: new Date().toLocaleDateString(),
    };

    // Add the new entry to the usage log
    setUsage([newEntry, ...usage]);

    toast('Food Usage Logged', {
      description: `${item} - ${quantity} units`,
    });

    setItem('');
    setQuantity('');
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Food Usage</h1>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow mb-8">
        <div>
          <label className="block mb-1 font-medium">Item Used</label>
          <input
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Quantity Used</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>

        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded transition active:scale-95"
        >
          Log Usage
        </button>
      </form>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Usage Log</h2>
        <ul className="space-y-2">
          {usage.map((entry, idx) => (
            <li key={idx} className="p-2 border-b">
              <strong>{entry.item}</strong> — {entry.quantity} units used on {entry.date}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
