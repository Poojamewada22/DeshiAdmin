// "use client";

// import { useEffect, useState } from "react";
// import axios from "axios";
// import DashboardLayout from "@/app/components/DashboardLayout";
// import { Plus, Pencil, Trash2, Search } from "lucide-react";

// interface Category {
//   _id: string;
//   name: string;
//   createdAt?: string;
// }

// export default function BlogCategoryPage() {
//   const [categories, setCategories] = useState<Category[]>([]);
//   const [filteredCategories, setFilteredCategories] = useState<Category[]>([]);
//   const [name, setName] = useState<string>("");
//   const [search, setSearch] = useState<string>("");
//   const [loading, setLoading] = useState<boolean>(false);
//   const [editingId, setEditingId] = useState<string | null>(null);

//   const API = "https://deshibackend.onrender.com/api/category";

//   const getCategories = async () => {
//     try {
//       const res = await axios.get(`${API}/all`);
//       const data = res.data?.categories || [];
//       setCategories(data);
//       setFilteredCategories(data);
//     } catch (error) {
//       console.error(error);
//       alert("Failed to fetch categories");
//     }
//   };

//   const handleSubmit = async () => {
//     if (!name.trim()) {
//       alert("Please enter category name");
//       return;
//     }

//     setLoading(true);

//     try {
//       if (editingId) {
//         await axios.put(`${API}/update/${editingId}`, { name });
//         alert("Category Updated Successfully");
//       } else {
//         await axios.post(`${API}/create`, { name });
//         alert("Category Added Successfully");
//       }

//       setName("");
//       setEditingId(null);
//       await getCategories();
//     } catch (error) {
//       console.error(error);
//       alert("Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleEdit = (category: Category) => {
//     setName(category.name);
//     setEditingId(category._id);
//   };

//   const deleteCategory = async (id: string) => {
//     try {
//       await axios.delete(`${API}/delete/${id}`);
//       alert("Category Deleted Successfully");
//       await getCategories();
//     } catch (error) {
//       console.error(error);
//       alert("Delete Failed");
//     }
//   };

//   useEffect(() => {
//     const filtered = categories.filter((item) =>
//       item.name.toLowerCase().includes(search.toLowerCase())
//     );
//     setFilteredCategories(filtered);
//   }, [search, categories]);

//   useEffect(() => {
//     getCategories();
//   }, []);

//   return (
//     <DashboardLayout>
//       <div className="p-6">
//         {/* Header */}
//         <div className="flex flex-col lg:flex-row justify-between gap-4 mb-8">
//           <div>
//             <h1 className="text-3xl font-bold text-[#032B3A]">
//               Blog Category
//             </h1>
//             <p className="text-gray-500">Manage blog categories</p>
//           </div>

//           <div className="flex gap-3">
//             <input
//               type="text"
//               placeholder="Enter category name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="border px-4 py-3 rounded-lg outline-none"
//             />

//             <button
//               onClick={handleSubmit}
//               disabled={loading}
//               className="bg-[#d9b56d] text-white px-5 py-3 rounded-lg flex items-center gap-2"
//             >
//               <Plus size={18} />
//               {loading ? "Loading..." : editingId ? "Update" : "Add"}
//             </button>
//           </div>
//         </div>

//         {/* Search */}
//         <div className="mb-6">
//           <div className="flex items-center border rounded-lg px-4 py-3">
//             <Search size={18} />
//             <input
//               type="text"
//               placeholder="Search category..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="ml-3 outline-none w-full"
//             />
//           </div>
//         </div>

//         {/* Table */}
//         <div className="bg-white rounded-xl shadow overflow-hidden">
//           <div className="grid grid-cols-4 bg-[#032B3A] text-white p-4 font-semibold">
//             <div>ID</div>
//             <div>Name</div>
//             <div>Status</div>
//             <div className="text-center">Actions</div>
//           </div>

//           {filteredCategories.length > 0 ? (
//             filteredCategories.map((item, index) => (
//               <div
//                 key={item._id}
//                 className="grid grid-cols-4 p-4 border-b items-center"
//               >
//                 <div>{index + 1}</div>
//                 <div>{item.name}</div>
//                 <div>
//                   <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
//                     Active
//                   </span>
//                 </div>

//                 <div className="flex justify-center gap-2">
//                   <button
//                     onClick={() => handleEdit(item)}
//                     className="bg-blue-100 p-2 rounded"
//                   >
//                     <Pencil size={16} />
//                   </button>

//                   <button
//                     onClick={() => deleteCategory(item._id)}
//                     className="bg-red-100 p-2 rounded"
//                   >
//                     <Trash2 size={16} />
//                   </button>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div className="p-6 text-center text-gray-500">
//               No Categories Found
//             </div>
//           )}
//         </div>
//       </div>
//     </DashboardLayout>
//   );
// }


export default function Page() {
  return <div>Blog Category</div>;
}