// "use client";

// import Link from "next/link";

// import {
//   LayoutDashboard,
//   FileText,
//   FolderKanban,
//   MessageSquare,
// } from "lucide-react";

// export default function Sidebar() {
//   return (
//     <aside className="w-[280px] bg-[#032B3A] text-white flex flex-col min-h-screen">
//       {/* Logo */}
//       <div className="px-8 py-8 border-b border-[#0d4357]">
//         <h1 className="text-4xl font-serif italic">Deshi</h1>

//         <p className="text-sm tracking-[4px] uppercase text-gray-300 mt-2">
//           Admin Panel
//         </p>
//       </div>

//       {/* Menu */}
//       <nav className="flex-1 px-6 py-8 space-y-3">
//         {/* Dashboard */}
//         <Link
//           href="/dashboard"
//           className="flex items-center gap-4 px-5 py-4 rounded-xl hover:bg-[#0d4357] transition"
//         >
//           <LayoutDashboard size={22} />

//           <span className="text-lg">Dashboard</span>
//         </Link>

//         {/* Blogs */}
//         <Link
//           href="/dashboard/blog"
//           className="flex items-center gap-4 px-5 py-4 rounded-xl hover:bg-[#0d4357] transition"
//         >
//           <FileText size={22} />

//           <span className="text-lg">Blogs</span>
//         </Link>

//         {/* Blog Category */}
//         <Link
//           href="/dashboard/blog-category"
//           className="flex items-center gap-4 px-5 py-4 rounded-xl hover:bg-[#0d4357] transition"
//         >
//           <FolderKanban size={22} />

//           <span className="text-lg">Blog Category</span>
//         </Link>

//         {/* Contact */}
//         <Link
//           href="/dashboard/contact"
//           className="flex items-center gap-4 px-5 py-4 rounded-xl hover:bg-[#0d4357] transition"
//         >
//           <MessageSquare size={22} />

//           <span className="text-lg">Contact</span>
//         </Link>
//         {/* 
//         menu */}
//         <Link
//           href="/dashboard/menu"
//           className="flex items-center gap-4 px-5 py-4 rounded-xl hover:bg-[#0d4357] transition"
//         >
//           <MessageSquare size={22} />

//           <span className="text-lg">Menu</span>
//         </Link>

//          <Link
//           href="/dashboard/reservation"
//           className="flex items-center gap-4 px-5 py-4 rounded-xl hover:bg-[#0d4357] transition"
//         >
//           <MessageSquare size={22} />

//           <span className="text-lg">Reservation</span>
//         </Link> 
//       </nav>
//     </aside>
//   );
// }


// "use client";

// import Link from "next/link";
// import {
//   LayoutDashboard,
//   FileText,
//   FolderKanban,
//   MessageSquare,
//   UtensilsCrossed,
//   CalendarDays,
//   X,
// } from "lucide-react";

// type SidebarProps = {
//   isOpen: boolean;
//   onClose: () => void;
// };

// export default function Sidebar({
//   isOpen,
//   onClose,
// }: SidebarProps) {
//   return (
//     <>
//       {/* Mobile Overlay */}
//       {isOpen && (
//         <div
//           onClick={onClose}
//           className="lg:hidden fixed inset-0 bg-black/50 z-40"
//         />
//       )}

//       {/* Sidebar */}
//       <aside
//         className={`
//           fixed lg:static
//           top-0 left-0
//           z-50
//           w-[280px]
//           h-screen
//           bg-[#032B3A]
//           text-white
//           flex flex-col
//           transform
//           transition-transform
//           duration-300
//           ${
//             isOpen
//               ? "translate-x-0"
//               : "-translate-x-full lg:translate-x-0"
//           }
//         `}
//       >
//         {/* Header */}
//         <div className="px-6 py-6 border-b border-[#0d4357] flex items-center justify-between">
//           <div>
//             <h1 className="text-4xl font-serif italic">
//               Deshi
//             </h1>

//             <p className="text-xs tracking-[4px] uppercase text-gray-300 mt-2">
//               Admin Panel
//             </p>
//           </div>

//           {/* Mobile Close Button */}
//           <button
//             onClick={onClose}
//             className="lg:hidden"
//           >
//             <X size={28} />
//           </button>
//         </div>

//         {/* Menu */}
//         <nav className="flex-1 px-4 py-6 overflow-y-auto">
//           <div className="space-y-2">
//             <Link
//               href="/dashboard"
//               onClick={onClose}
//               className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-[#0d4357] transition"
//             >
//               <LayoutDashboard size={22} />
//               <span>Dashboard</span>
//             </Link>

//             <Link
//               href="/dashboard/blog"
//               onClick={onClose}
//               className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-[#0d4357] transition"
//             >
//               <FileText size={22} />
//               <span>Blogs</span>
//             </Link>

//             <Link
//               href="/dashboard/blog-category"
//               onClick={onClose}
//               className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-[#0d4357] transition"
//             >
//               <FolderKanban size={22} />
//               <span>Blog Category</span>
//             </Link>

//             <Link
//               href="/dashboard/contact"
//               onClick={onClose}
//               className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-[#0d4357] transition"
//             >
//               <MessageSquare size={22} />
//               <span>Contact</span>
//             </Link>

//             <Link
//               href="/dashboard/menu"
//               onClick={onClose}
//               className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-[#0d4357] transition"
//             >
//               <UtensilsCrossed size={22} />
//               <span>Menu</span>
//             </Link>

//             <Link
//               href="/dashboard/reservation"
//               onClick={onClose}
//               className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-[#0d4357] transition"
//             >
//               <CalendarDays size={22} />
//               <span>Reservation</span>
//             </Link>
//           </div>
//         </nav>
//       </aside>
//     </>
//   );
// }


"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  FileText,
  FolderKanban,
  MessageSquare,
  UtensilsCrossed,
  CalendarDays,
  X,
} from "lucide-react";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Sidebar({
  isOpen,
  onClose,
}: SidebarProps) {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:sticky
          top-0 left-0
          z-50
          w-[280px] lg:w-[300px]
          min-h-screen
          bg-[#032B3A]
          text-white
          flex flex-col
          transition-transform
          duration-300
          overflow-y-auto
          ${
            isOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
      >
        {/* Header */}
        <div className="px-6 py-6 border-b border-[#0d4357] shrink-0">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-serif italic">
                Deshi
              </h1>

              <p className="text-xs tracking-[4px] uppercase text-gray-300 mt-2">
                Admin Panel
              </p>
            </div>

            <button
              onClick={onClose}
              className="lg:hidden"
            >
              <X size={28} />
            </button>
          </div>
        </div>

        {/* Menu */}
        <nav className="flex-1 px-4 py-6">
          <div className="space-y-2">
            <Link
              href="/dashboard"
              onClick={onClose}
              className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-[#0d4357] transition"
            >
              <LayoutDashboard size={22} />
              <span>Dashboard</span>
            </Link>

            <Link
              href="/dashboard/blog"
              onClick={onClose}
              className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-[#0d4357] transition"
            >
              <FileText size={22} />
              <span>Blogs</span>
            </Link>

            <Link
              href="/dashboard/blog-category"
              onClick={onClose}
              className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-[#0d4357] transition"
            >
              <FolderKanban size={22} />
              <span>Blog Category</span>
            </Link>

            <Link
              href="/dashboard/contact"
              onClick={onClose}
              className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-[#0d4357] transition"
            >
              <MessageSquare size={22} />
              <span>Contact</span>
            </Link>

            <Link
              href="/dashboard/menu"
              onClick={onClose}
              className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-[#0d4357] transition"
            >
              <UtensilsCrossed size={22} />
              <span>Menu</span>
            </Link>

            <Link
              href="/dashboard/reservation"
              onClick={onClose}
              className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-[#0d4357] transition"
            >
              <CalendarDays size={22} />
              <span>Reservation</span>
            </Link>

            {/* Future Items Example */}
            <Link
              href="/dashboard/users"
              onClick={onClose}
              className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-[#0d4357] transition"
            >
              <MessageSquare size={22} />
              <span>Users</span>
            </Link>

            <Link
              href="/dashboard/settings"
              onClick={onClose}
              className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-[#0d4357] transition"
            >
              <MessageSquare size={22} />
              <span>Settings</span>
            </Link>
          </div>
        </nav>
      </aside>
    </>
  );
}