"use client";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

interface Props {
  children: React.ReactNode;
}

export default function DashboardLayout({
  children,
}: Props) {
  return (
    <div className="flex min-h-screen bg-[#f5f5f5]">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-8">
          {children}
        </div>
      </div>
    </div>
  );
}