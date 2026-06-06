// // import {
// //   Menu,
// //   Bell,
// //   Search,
// // } from "lucide-react";

// // export default function Navbar() {
// //   return (
// //     <header className="bg-white px-8 py-5 flex items-center justify-between shadow-sm">

// //       {/* Left */}
// //       <div className="flex items-center gap-5">

// //         <button className="lg:hidden">
// //           <Menu />
// //         </button>

// //         <h2 className="text-3xl font-semibold text-[#032B3A]">
// //           Admin Dashboard
// //         </h2>
// //       </div>

// //       {/* Right */}
// //       <div className="flex items-center gap-5">

// //         {/* Search */}
// //         <div className="hidden md:flex items-center bg-[#f3f3f3] px-4 py-3 rounded-xl w-[300px]">

// //           <Search
// //             size={18}
// //             className="text-gray-500"
// //           />

// //           <input
// //             type="text"
// //             placeholder="Search..."
// //             className="bg-transparent outline-none ml-3 w-full"
// //           />
// //         </div>

// //         {/* Notification */}
// //         <button className="relative bg-[#f3f3f3] p-3 rounded-xl">

// //           <Bell size={22} />

// //           <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
// //         </button>

// //         {/* Profile */}
// //         <div className="flex items-center gap-3">

// //           <img
// //             src="https://i.pravatar.cc/"
// //             alt="profile"
// //             className="w-12 h-12 rounded-full object-cover"
// //           />

// //           <div>
// //             <h4 className="font-semibold">
// //               Admin
// //             </h4>

// //             <p className="text-sm text-gray-500">
// //               Super Admin
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //     </header>
// //   );
// // }
// import {
//   Menu,
//   Bell,
//   Search,
// } from "lucide-react";

// export default function Navbar() {
//   return (
//     <header className="bg-white border-b shadow-sm">
//       <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        
//         {/* Left Section */}
//         <div className="flex items-center gap-3 md:gap-5">
          
//           {/* Mobile Menu Button */}
//           <button className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition">
//             <Menu size={24} />
//           </button>

//           {/* Title */}
//           <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold text-[#032B3A]">
//             Admin Dashboard
//           </h2>
//         </div>

//         {/* Right Section */}
//         <div className="flex items-center gap-3 md:gap-5">
          
//           {/* Search Bar */}
//           <div className="hidden md:flex items-center bg-[#f5f5f5] px-4 py-3 rounded-xl w-[220px] lg:w-[320px]">
//             <Search
//               size={18}
//               className="text-gray-500"
//             />

//             <input
//               type="text"
//               placeholder="Search..."
//               className="bg-transparent outline-none ml-3 w-full text-sm"
//             />
//           </div>

//           {/* Search Icon Mobile */}
//           <button className="md:hidden bg-[#f5f5f5] p-3 rounded-xl">
//             <Search size={20} />
//           </button>

//           {/* Notification */}
//           <button className="relative bg-[#f5f5f5] p-3 rounded-xl hover:bg-gray-200 transition">
//             <Bell size={22} />

//             <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
//           </button>

//           {/* Profile */}
//           <div className="flex items-center gap-3">
//             <img
//               src="https://i.pravatar.cc/150?img=12"
//               alt="Profile"
//               className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border"
//             />

//             <div className="hidden sm:block">
//               <h4 className="font-semibold text-sm md:text-base">
//                 Admin
//               </h4>

//               <p className="text-xs md:text-sm text-gray-500">
//                 Super Admin
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }





"use client";

import {
  Menu,
  Bell,
  Search,
} from "lucide-react";

type NavbarProps = {
  toggleSidebar: () => void;
};

export default function Navbar({
  toggleSidebar,
}: NavbarProps) {
  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-30">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">

        {/* Left Section */}
        <div className="flex items-center gap-3 md:gap-5">

          {/* Sidebar Toggle */}
          <button
            onClick={toggleSidebar}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition"
          >
            <Menu size={24} />
          </button>

          {/* Title */}
          <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold text-[#032B3A]">
            Admin Dashboard
          </h2>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3 md:gap-5">

          {/* Search Bar */}
          <div className="hidden md:flex items-center bg-[#f5f5f5] px-4 py-3 rounded-xl w-[220px] lg:w-[320px]">
            <Search
              size={18}
              className="text-gray-500"
            />

            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none ml-3 w-full text-sm"
            />
          </div>

          {/* Mobile Search */}
          <button className="md:hidden bg-[#f5f5f5] p-3 rounded-xl">
            <Search size={20} />
          </button>

          {/* Notification */}
          <button className="relative bg-[#f5f5f5] p-3 rounded-xl hover:bg-gray-200 transition">
            <Bell size={22} />

            <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
          </button>

          {/* Profile */}
          <div className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/150?img=12"
              alt="Profile"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border"
            />

            <div className="hidden sm:block">
              <h4 className="font-semibold text-sm md:text-base">
                Admin
              </h4>

              <p className="text-xs md:text-sm text-gray-500">
                Super Admin
              </p>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}