"use client";
import { useState } from 'react';
import Sidebar from '../layout/Sidebar';

export default function LayoutWrapper({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="w-full min-h-screen relative">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div className="w-full overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
