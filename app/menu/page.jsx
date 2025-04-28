'use client';

import { useState } from 'react';
import { menuData } from '../../lib/data';
import { toast } from 'sonner';
import MenuItemForm from '../../components/MenuItemForm';

export default function MenuPage() {
  const [menu, setMenu] = useState(menuData);

  const addMenuItem = (newItem) => {
    setMenu([...menu, newItem]);
    toast("Menu Item Created", {
      description: `${newItem.name} with portion ${newItem.portion}`,
    });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Current Menu</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {menu.map((item, idx) => (
          <div key={idx} className="p-4 border rounded-lg bg-white">
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p>Portion Size: {item.portion}</p>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold mb-4">Create New Menu Item</h2>
      <MenuItemForm onAdd={addMenuItem} />
    </div>
  );
}
