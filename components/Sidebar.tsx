import React from 'react';
import { cn } from '@/lib/utils';
import { Home, ShoppingCart, BarChart, User, Lock, Settings } from 'lucide-react';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  return (
    <aside className={cn("w-64 bg-secondary text-secondary-foreground border-r border-border", className)}>
      <div className="p-4">
        <h2 className="text-lg font-bold">HORIZON FREE</h2>
      </div>
      <nav className="flex flex-col p-4 space-y-2">
        <a href="#" className="flex items-center space-x-2 hover:bg-accent hover:text-accent-foreground p-2 rounded-md">
          <Home className="h-4 w-4" />
          <span>Main Dashboard</span>
        </a>
        <a href="#" className="flex items-center space-x-2 hover:bg-accent hover:text-accent-foreground p-2 rounded-md">
          <ShoppingCart className="h-4 w-4" />
          <span>NFT Marketplace</span>
        </a>
        <a href="#" className="flex items-center space-x-2 hover:bg-accent hover:text-accent-foreground p-2 rounded-md">
          <BarChart className="h-4 w-4" />
          <span>Data Tables</span>
        </a>
         <a href="#" className="flex items-center space-x-2 hover:bg-accent hover:text-accent-foreground p-2 rounded-md">
          <User className="h-4 w-4" />
          <span>Profile</span>
        </a>
         <a href="#" className="flex items-center space-x-2 hover:bg-accent hover:text-accent-foreground p-2 rounded-md">
          <Lock className="h-4 w-4" />
          <span>Sign In</span>
        </a>
         <a href="#" className="flex items-center space-x-2 hover:bg-accent hover:text-accent-foreground p-2 rounded-md">
          <Settings className="h-4 w-4" />
          <span>RTL Admin</span>
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
