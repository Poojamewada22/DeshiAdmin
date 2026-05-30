"use client";

import DashboardLayout from "@/app/components/DashboardLayout";

import {
  Search,
  Trash2,
  Mail,
} from "lucide-react";

export default function ContactPage() {
  return (
    <DashboardLayout>

      {/* Header */}
      <div className="flex items-center justify-between mb-10">

        <div>
          <h1 className="text-4xl font-bold text-[#032B3A]">
            Contact Messages
          </h1>

          <p className="text-gray-500 mt-2">
            Manage customer contact requests
          </p>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white p-5 rounded-2xl shadow-sm mb-8">

        <div className="flex items-center bg-[#f5f5f5] px-5 py-4 rounded-xl">

          <Search
            size={20}
            className="text-gray-500"
          />

          <input
            type="text"
            placeholder="Search message..."
            className="bg-transparent outline-none ml-4 w-full"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">

        {/* Table Header */}
        <div className="grid grid-cols-6 bg-[#032B3A] text-white px-6 py-5 font-semibold">

          <div>ID</div>

          <div>Name</div>

          <div>Email</div>

          <div>Phone</div>

          <div>Message</div>

          <div className="text-center">
            Action
          </div>
        </div>

        {/* Row 1 */}
        <div className="grid grid-cols-6 items-center px-6 py-5 border-b hover:bg-gray-50 transition">

          <div>#01</div>

          <div>Rahul Sharma</div>

          <div>
            rahul@gmail.com
          </div>

          <div>
            9876543210
          </div>

          <div>
            Table booking request
          </div>

          <div className="flex items-center justify-center gap-4">

            <button className="bg-blue-100 text-blue-600 p-3 rounded-xl">

              <Mail size={18} />
            </button>

            <button className="bg-red-100 text-red-600 p-3 rounded-xl">

              <Trash2 size={18} />
            </button>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-6 items-center px-6 py-5 border-b hover:bg-gray-50 transition">

          <div>#02</div>

          <div>Pooja Singh</div>

          <div>
            pooja@gmail.com
          </div>

          <div>
            9871234567
          </div>

          <div>
            Catering inquiry
          </div>

          <div className="flex items-center justify-center gap-4">

            <button className="bg-blue-100 text-blue-600 p-3 rounded-xl">

              <Mail size={18} />
            </button>

            <button className="bg-red-100 text-red-600 p-3 rounded-xl">

              <Trash2 size={18} />
            </button>
          </div>
        </div>

      </div>

    </DashboardLayout>
  );
}