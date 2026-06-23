import type { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  amount: string;
  Icon: LucideIcon;
  color: string;
}

export const StatCard = ({ title, amount, Icon, color }: StatCardProps) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center space-x-4">
    <div className={`p-3 rounded-full ${color}`}>
      <Icon className="w-6 h-6 text-white" />
    </div>
    <div>
      <p className="text-sm text-gray-500">{title}</p>
      <h3 className="text-xl font-bold text-gray-800">{amount}</h3>
    </div>
  </div>
);