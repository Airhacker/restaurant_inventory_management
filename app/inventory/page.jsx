'use client';

import { useState } from 'react';
import { inventoryData, outOfStockData } from '../../lib/data';
import { toast } from 'sonner';

export default function InventoryPage() {
  const [inventory, setInventory] = useState(inventoryData);
  const [outOfStock, setOutOfStock] = useState(outOfStockData);
  const [newItem, setNewItem] = useState('');
  const [newQuantity, setNewQuantity] = useState('');
  const [newExpiration, setNewExpiration] = useState('');

  const handleAddItem = (e) => {
    e.preventDefault();
    if (!newItem || newQuantity === '' || !newExpiration) return;

    // Quantity format to include "lbs"
    const quantityFormatted = `${newQuantity} lbs`;

    const newEntry = {
      item: newItem,
      quantity: quantityFormatted,
      expiration: newExpiration,
    };

    // If quantity is 0, add to out-of-stock list
    if (parseInt(newQuantity) === 0) {
      setOutOfStock((prev) => [...prev, newItem]);
    }

    setInventory([...inventory, newEntry]);
    toast.success('Item added to inventory');

    setNewItem('');
    setNewQuantity('');
    setNewExpiration('');
  };

  const handleDeleteItem = (index) => {
    const updatedInventory = [...inventory];
    updatedInventory.splice(index, 1);
    setInventory(updatedInventory);
    toast.success('Item removed from inventory');
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Inventory Overview</h1>

      {/* Add New Item Form */}
      <form onSubmit={handleAddItem} className="space-y-4 bg-white p-6 rounded-lg shadow mb-10">
        <div>
          <label className="block mb-1 font-medium">Item Name</label>
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Quantity</label>
          <input
            type="number"
            value={newQuantity}
            onChange={(e) => setNewQuantity(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Expiration Date</label>
          <input
            type="date"
            value={newExpiration}
            onChange={(e) => setNewExpiration(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
        >
          Add Inventory Item
        </button>
      </form>

      {/* Main Inventory Table */}
      <div className="overflow-x-auto bg-white shadow rounded-lg mb-12">
        <h2 className="text-xl font-bold p-6 pb-0">Available Inventory</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Item
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Quantity
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Expiration
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {inventory.map((item, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">{item.item}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.quantity}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.expiration}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => handleDeleteItem(idx)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Out of stock inventory table */}
      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <h2 className="text-xl font-bold p-6 pb-0">Out of Stock Items</h2>
        {outOfStock.length > 0 ? (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Item
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {outOfStock.map((item, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-red-600 font-semibold">{item}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="p-6 text-gray-500">No out of stock items currently.</p>
        )}
      </div>
    </div>
  );
}
