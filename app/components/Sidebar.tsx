"use client";

import Link from "next/link";

import {
  LayoutDashboard,
  FileText,
  FolderKanban,
  MessageSquare,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-[280px] bg-[#032B3A] text-white flex flex-col min-h-screen">
      {/* Logo */}
      <div className="px-8 py-8 border-b border-[#0d4357]">
        <h1 className="text-4xl font-serif italic">Deshi</h1>

        <p className="text-sm tracking-[4px] uppercase text-gray-300 mt-2">
          Admin Panel
        </p>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-6 py-8 space-y-3">
        {/* Dashboard */}
        <Link
          href="/dashboard"
          className="flex items-center gap-4 px-5 py-4 rounded-xl hover:bg-[#0d4357] transition"
        >
          <LayoutDashboard size={22} />

          <span className="text-lg">Dashboard</span>
        </Link>

        {/* Blogs */}
        <Link
          href="/dashboard/blog"
          className="flex items-center gap-4 px-5 py-4 rounded-xl hover:bg-[#0d4357] transition"
        >
          <FileText size={22} />

          <span className="text-lg">Blogs</span>
        </Link>

        {/* Blog Category */}
        <Link
          href="/dashboard/blog-category"
          className="flex items-center gap-4 px-5 py-4 rounded-xl hover:bg-[#0d4357] transition"
        >
          <FolderKanban size={22} />

          <span className="text-lg">Blog Category</span>
        </Link>

        {/* Contact */}
        <Link
          href="/dashboard/contact"
          className="flex items-center gap-4 px-5 py-4 rounded-xl hover:bg-[#0d4357] transition"
        >
          <MessageSquare size={22} />

          <span className="text-lg">Contact</span>
        </Link>
        {/* 
        menu */}
        <Link
          href="/dashboard/menu"
          className="flex items-center gap-4 px-5 py-4 rounded-xl hover:bg-[#0d4357] transition"
        >
          <MessageSquare size={22} />

          <span className="text-lg">Menu</span>
        </Link>

         <Link
          href="/dashboard/reservation"
          className="flex items-center gap-4 px-5 py-4 rounded-xl hover:bg-[#0d4357] transition"
        >
          <MessageSquare size={22} />

          <span className="text-lg">Reservation</span>
        </Link> 
      </nav>
    </aside>
  );
}
