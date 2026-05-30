import DashboardLayout from "@/app/components/DashboardLayout";

export default function DashboardPage() {
  return (
    <DashboardLayout>

      <div>
        <h1 className="text-4xl font-bold text-[#032B3A] mb-10">
          Dashboard Overview
        </h1>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-gray-500 mb-3">
              Total Blogs
            </h3>

            <h1 className="text-5xl font-bold text-[#032B3A]">
              25
            </h1>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-gray-500 mb-3">
              Categories
            </h3>

            <h1 className="text-5xl font-bold text-[#032B3A]">
              12
            </h1>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-gray-500 mb-3">
              Contacts
            </h3>

            <h1 className="text-5xl font-bold text-[#032B3A]">
              40
            </h1>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-gray-500 mb-3">
              Users
            </h3>

            <h1 className="text-5xl font-bold text-[#032B3A]">
              120
            </h1>
          </div>

        </div>
      </div>

    </DashboardLayout>
  );
}

   