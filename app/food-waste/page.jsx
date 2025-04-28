'use client';

import { useState } from 'react';
import { toast } from 'sonner';

export default function FoodWastePage() {
  const [item, setItem] = useState('');
  const [quantity, setQuantity] = useState('');
  const [reason, setReason] = useState('');
  const [staff, setStaff] = useState('');
  const [comments, setComments] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ item, quantity, reason, staff, comments });
    toast("Food Waste Submitted", {
      description: `${item} (${quantity}) - ${reason}`,
    });
    setItem('');
    setQuantity('');
    setReason('');
    setStaff('');
    setComments('');
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Enter Food Waste</h1>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow">
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
    </div>
  );
}
