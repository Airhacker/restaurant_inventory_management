'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const menuItems = [
  { label: 'Home', path: '/' },
  { label: 'Menu', path: '/menu' },
  { label: 'Inventory', path: '/inventory' },
  { label: 'Incoming Orders', path: '/incoming-orders' },
  { label: 'Food Usage', path: '/food-usage' },
  { label: 'Food Waste', path: '/food-waste' },
  { label: 'Set Par Levels', path: '/set-par-levels' },
  { label: 'Out of Stock Items', path: '/out-of-stock' },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const currentIndex = menuItems.findIndex((item) => pathname.startsWith(item.path));

  const goPrevious = () => {
    const newIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
    router.push(menuItems[newIndex].path);
  };

  const goNext = () => {
    const newIndex = (currentIndex + 1) % menuItems.length;
    router.push(menuItems[newIndex].path);
  };

  return (
    <div className="w-64 min-h-screen bg-white border-r flex flex-col justify-between">
      <div>
        <div className="p-6 font-bold text-xl">Restaurant Inventory Management App</div>
        <nav className="flex flex-col">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`p-4 hover:bg-gray-100 ${pathname.startsWith(item.path) ? 'bg-gray-100 font-semibold' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
