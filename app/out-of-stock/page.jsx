import { outOfStockData } from '../../lib/data';

export default function OutOfStockPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Out of Stock Items</h1>

      {/* Maps over the out of stock data and displays items in a list */}
      <ul className="bg-white p-6 rounded-lg shadow space-y-2">
        {outOfStockData.map((item, idx) => (
          <li key={idx} className="text-lg font-semibold">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
