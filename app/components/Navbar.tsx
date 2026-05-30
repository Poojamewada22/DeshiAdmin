// export default function Navbar() {
//   return (
//     <div className="bg-white p-5 shadow-sm">

//       <h1 className="text-3xl font-bold">
//         Admin Dashboard
//       </h1>
//     </div>
//   );
// }"use client";

import {
  Menu,
  Bell,
  Search,
} from "lucide-react";

export default function Navbar() {
  return (
    <header className="bg-white px-8 py-5 flex items-center justify-between shadow-sm">

      {/* Left */}
      <div className="flex items-center gap-5">

        <button className="lg:hidden">
          <Menu />
        </button>

        <h2 className="text-3xl font-semibold text-[#032B3A]">
          Admin Dashboard
        </h2>
      </div>

      {/* Right */}
      <div className="flex items-center gap-5">

        {/* Search */}
        <div className="hidden md:flex items-center bg-[#f3f3f3] px-4 py-3 rounded-xl w-[300px]">

          <Search
            size={18}
            className="text-gray-500"
          />

          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none ml-3 w-full"
          />
        </div>

        {/* Notification */}
        <button className="relative bg-[#f3f3f3] p-3 rounded-xl">

          <Bell size={22} />

          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3">

          <img
            src="https://i.pravatar.cc/"
            alt="profile"
            className="w-12 h-12 rounded-full object-cover"
          />

          <div>
            <h4 className="font-semibold">
              Admin
            </h4>

            <p className="text-sm text-gray-500">
              Super Admin
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}