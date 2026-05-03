"use client";
import { useState } from 'react';
import Sidebar from '../layout/Sidebar';
import { Menu, X } from 'lucide-react';

export default function LayoutWrapper({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="w-full min-h-screen relative">
      {/* Mobile Header with Menu Button */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-[#0A192F]/95 to-[#0A192F]/80 backdrop-blur-md border-b border-accent/20 px-4 py-4">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-lg bg-accent/10 text-accent hover:bg-accent/20 transition-all"
        >
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Add top padding on mobile to account for header */}
      <div className="md:hidden h-20" />

      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div className="w-full overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
