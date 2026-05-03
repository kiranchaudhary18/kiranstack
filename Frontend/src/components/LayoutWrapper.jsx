"use client";
import { useState } from 'react';
import Sidebar from '../layout/Sidebar';

export default function LayoutWrapper({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex w-full min-h-screen">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div className="flex-1 overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
