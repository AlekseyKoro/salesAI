import React from 'react';
import { BarChart3, Headphones, Users, Settings } from 'lucide-react';

const menuItems = [
  { icon: BarChart3, label: 'Руководителю', path: '/manager-dashboard' },
  { icon: Users, label: 'Менеджеру', path: '/sales-rep' },
  { icon: Settings, label: 'Интеграции', path: '/integrations' },
];

export function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 h-screen fixed left-0 top-0 text-white p-4">
      <div className="flex items-center gap-2 mb-8">
        <Headphones className="w-8 h-8 text-blue-400" />
        <h1 className="text-xl font-bold">Call Analyzer</h1>
      </div>
      
      <nav>
        {menuItems.map((item) => (
          <div
            key={item.path}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 cursor-pointer mb-2"
          >
            <item.icon className="w-5 h-5 text-gray-400" />
            <span>{item.label}</span>
          </div>
        ))}
      </nav>
    </div>
  );
}