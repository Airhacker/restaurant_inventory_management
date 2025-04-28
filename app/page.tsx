import { inventoryData, menuData, ordersData, foodUsageData } from '../lib/data';

export default function HomePage() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-center">
        Welcome to Restaurant Inventory Management App
      </h1>

      <div className="flex flex-col gap-8">
        {/* Inventory Card */}
        <div className="p-8 bg-white rounded-xl shadow hover:shadow-2xl transition transform hover:scale-105">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Inventory Items</h2>
          <p className="text-5xl font-bold text-blue-600">{inventoryData.length}</p>
        </div>

        {/* Menu Card */}
        <div className="p-8 bg-white rounded-xl shadow hover:shadow-2xl transition transform hover:scale-105">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Menu Items</h2>
          <p className="text-5xl font-bold text-green-600">{menuData.length}</p>
        </div>

        {/* Orders Card */}
        <div className="p-8 bg-white rounded-xl shadow hover:shadow-2xl transition transform hover:scale-105">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Incoming Orders</h2>
          <p className="text-5xl font-bold text-purple-600">{ordersData.length}</p>
        </div>

        {/* Food Usage Card */}
        <div className="p-8 bg-white rounded-xl shadow hover:shadow-2xl transition transform hover:scale-105">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Food Usage Entries</h2>
          <p className="text-5xl font-bold text-red-600">{foodUsageData.length}</p>
        </div>
      </div>
    </div>
  );
}
