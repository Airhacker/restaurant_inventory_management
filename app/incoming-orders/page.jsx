import { ordersData } from '../../lib/data';

export default function IncomingOrdersPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Incoming Orders</h1>
      
      <div className="space-y-4">
        {ordersData.map((order, idx) => (
          <div key={idx} className="p-4 border rounded-lg bg-white shadow hover:shadow-md transition">
            <p><strong>Order Placed On:</strong> {order.date}</p>
            <p><strong>Confirmed By:</strong> {order.vendor}</p>
            <p><strong>Approximate Arrival:</strong> {order.arrival}</p>
            <button className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
              Contact Vendor
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
