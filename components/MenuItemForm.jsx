import { useState } from 'react';

export default function MenuItemForm({ onAdd }) {
  const [name, setName] = useState('');
  const [portion, setPortion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prevent form submission if name or portion is empty
    if (!name || !portion) return;

    // Call the onAdd function passed as a prop with the new menu item data
    onAdd({ name, portion });
    setName('');
    setPortion('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded-lg shadow">
      <div>
        <label className="block mb-1 font-medium">Menu Item Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded w-full"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Portion Size</label>
        <input
          type="text"
          value={portion}
          onChange={(e) => setPortion(e.target.value)}
          className="border p-2 rounded w-full"
        />
      </div>

      <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
        Commit Menu Item
      </button>
    </form>
  );
}
