'use client';

import { useState } from 'react';
import { inventoryData } from '../../lib/data';
import { toast } from 'sonner'; // For showing toast notifications

export default function InventoryPage() {
  // State to manage inventory items
  const [inventory, setInventory] = useState(inventoryData);

  // State for new item form inputs
  const [newItem, setNewItem] = useState('');
  const [newQuantity, setNewQuantity] = useState('');
  const [newExpiration, setNewExpiration] = useState('');

  // Handle adding a new item to inventory
  const handleAddItem = (e) => {
    e.preventDefault();
    if (!newItem || newQuantity === '' || !newExpiration) return;

    const newEntry = {
      item: newItem,
      quantity: `${newQuantity} lbs`,
      expiration: newExpiration,
    };

    setInventory([...inventory, newEntry]);
    toast.success('Item added to inventory');

    // Clear form fields
    setNewItem('');
    setNewQuantity('');
    setNewExpiration('');
  };

  // Handle deleting an item from inventory
  const handleDeleteItem = (index) => {
    const updatedInventory = [...inventory];
    updatedInventory.splice(index, 1);
    setInventory(updatedInventory);

    toast.success('Item removed from inventory');
  };

  // Columns for the main inventory table
  const columns = ['Item', 'Quantity', 'Expiration', 'Actions'];

  // Out of Stock items based only on original inventoryData
  const outOfStockItems = inventoryData.filter((item) => parseInt(item.quantity) === 0);

  return (
    <div>
      {/* Page Title */}
      <h1 className="text-2xl font-bold mb-6">Inventory Overview</h1>

      {/* Form to Add New Inventory Items */}
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
          <label className="block mb-1 font-medium">Quantity (lbs)</label>
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
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              {columns.map((col) => (
                <th
                  key={col}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {inventory.map((item, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                {/* Item Name */}
                <td className="px-6 py-4 whitespace-nowrap">{item.item}</td>

                {/* Quantity or Out of Stock */}
                <td className="px-6 py-4 whitespace-nowrap">
                  {parseInt(item.quantity) === 0 ? (
                    <span className="text-red-600 font-bold">Out of Stock</span>
                  ) : (
                    item.quantity
                  )}
                </td>

                {/* Expiration Date */}
                <td className="px-6 py-4 whitespace-nowrap">{item.expiration}</td>

                {/* Delete Button */}
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

      {/* Out of Stock Items Table */}
      <div className="mt-12">
        <h2 className="text-xl font-bold mb-4">Out of Stock Items</h2>

        <div className="overflow-x-auto bg-white shadow rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Item
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Expiration
                </th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {outOfStockItems.length > 0 ? (
                outOfStockItems.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-red-600 font-bold">
                      {item.item}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.expiration}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap" colSpan="2">
                    No out of stock items.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
