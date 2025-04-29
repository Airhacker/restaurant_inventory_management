'use client';

import { useState } from 'react';
import { toast } from 'sonner';

export default function FoodWastePage() {
  // Input states
  const [item, setItem] = useState('');
  const [quantity, setQuantity] = useState('');
  const [reason, setReason] = useState('');
  const [staff, setStaff] = useState('');
  const [comments, setComments] = useState('');

  // Waste log input state
  const [wasteLog, setWasteLog] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new waste entry
    const newWaste = {
      item,
      quantity,
      reason,
      staff,
      comments,
      date: new Date().toLocaleDateString(),
    };

    // Add the new entry to the waste log
    setWasteLog((prev) => [newWaste, ...prev]);

    toast.success('Food Waste Submitted');

    setItem('');
    setQuantity('');
    setReason('');
    setStaff('');
    setComments('');
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Enter Food Waste</h1>

      {/* Food Waste Form */}
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow mb-10">
        <div>
          <label className="block mb-1 font-medium">Food Waste Item</label>
          <input
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Quantity</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Reason for Waste</label>
          <input
            type="text"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Staff Member</label>
          <input
            type="text"
            value={staff}
            onChange={(e) => setStaff(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Comments</label>
          <textarea
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            className="border p-2 rounded w-full"
          ></textarea>
        </div>

        <button type="submit" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">
          Send Food Waste
        </button>
      </form>

      {/* Waste Log Table */}
      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <h2 className="text-xl font-bold p-6 pb-0">Food Waste Log</h2>

        {wasteLog.length > 0 ? (
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
                  Quantity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Reason
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Staff
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Comments
                </th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {wasteLog.map((entry, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">{entry.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{entry.item}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{entry.quantity}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{entry.reason}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{entry.staff}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{entry.comments}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="p-6 text-gray-500">No food waste logged yet.</p>
        )}
      </div>
    </div>
  );
}
