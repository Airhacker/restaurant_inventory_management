import { inventoryData } from '../../lib/data';
import Table from '../../components/Table';

export default function InventoryPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Inventory Overview</h1>
      <Table data={inventoryData} columns={['Item', 'Quantity', 'Expiration']} />
    </div>
  );
}
