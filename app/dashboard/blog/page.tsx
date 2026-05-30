// // import DashboardLayout from "@/app/components/DashboardLayout";

// // export default function BlogPage() {
// //   return (
// //     <DashboardLayout>

// //       <h1 className="text-4xl font-bold text-[#032B3A] mb-8">
// //         Blogs Page
// //       </h1>

// //       {/* Cards */}
// //       <div className="grid md:grid-cols-3 gap-6 mb-10">

// //         <div className="bg-white p-6 rounded-2xl shadow-sm">
// //           <h2 className="text-gray-500 mb-3">
// //             Total Blogs
// //           </h2>

// //           <h1 className="text-5xl font-bold text-[#032B3A]">
// //             25
// //           </h1>
// //         </div>

// //         <div className="bg-white p-6 rounded-2xl shadow-sm">
// //           <h2 className="text-gray-500 mb-3">
// //             Categories
// //           </h2>

// //           <h1 className="text-5xl font-bold text-[#032B3A]">
// //             8
// //           </h1>
// //         </div>

// //         <div className="bg-white p-6 rounded-2xl shadow-sm">
// //           <h2 className="text-gray-500 mb-3">
// //             Published
// //           </h2>

// //           <h1 className="text-5xl font-bold text-[#032B3A]">
// //             20
// //           </h1>
// //         </div>
// //       </div>

// //       {/* Blog Table */}
// //       <div className="bg-white rounded-2xl shadow-sm overflow-hidden">

// //         <table className="w-full">

// //           <thead className="bg-[#032B3A] text-white">

// //             <tr>

// //               <th className="text-left px-6 py-5">
// //                 Blog Name
// //               </th>

// //               <th className="text-left px-6 py-5">
// //                 Category
// //               </th>

// //               <th className="text-left px-6 py-5">
// //                 Status
// //               </th>

// //               <th className="text-left px-6 py-5">
// //                 Date
// //               </th>
// //             </tr>
// //           </thead>

// //           <tbody>

// //             <tr className="border-b">

// //               <td className="px-6 py-5">
// //                 Hyderabadi Biryani
// //               </td>

// //               <td className="px-6 py-5">
// //                 Biryani
// //               </td>

// //               <td className="px-6 py-5">
// //                 Published
// //               </td>

// //               <td className="px-6 py-5">
// //                 20 May 2026
// //               </td>
// //             </tr>

// //             <tr className="border-b">

// //               <td className="px-6 py-5">
// //                 Butter Chicken
// //               </td>

// //               <td className="px-6 py-5">
// //                 Chicken
// //               </td>

// //               <td className="px-6 py-5">
// //                 Draft
// //               </td>

// //               <td className="px-6 py-5">
// //                 18 May 2026
// //               </td>
// //             </tr>

// //           </tbody>
// //         </table>
// //       </div>

// //     </DashboardLayout>
// //   );
// // }

  

// "use client";

// import DashboardLayout from "@/app/components/DashboardLayout";
// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function BlogPage() {
//   const [blogs, setBlogs] = useState([]);

//   const fetchBlogs = async () => {
//     try {
//       const res = await axios.get(
//         "http://localhost:5000/api/blog/all"
//       );

//       setBlogs(res.data.blogs);

//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchBlogs();
//   }, []);

//   return (
//     <DashboardLayout>
//       <h1 className="text-4xl font-bold text-[#032B3A] mb-8">
//         Blogs Page
//       </h1>

//       {/* Cards */}
//       <div className="grid md:grid-cols-3 gap-6 mb-10">

//         <div className="bg-white p-6 rounded-2xl shadow-sm">
//           <h2 className="text-gray-500 mb-3">
//             Total Blogs
//           </h2>

//           <h1 className="text-5xl font-bold text-[#032B3A]">
//             {blogs.length}
//           </h1>
//         </div>

//         <div className="bg-white p-6 rounded-2xl shadow-sm">
//           <h2 className="text-gray-500 mb-3">
//             Categories
//           </h2>

//           <h1 className="text-5xl font-bold text-[#032B3A]">
//             8
//           </h1>
//         </div>

//         <div className="bg-white p-6 rounded-2xl shadow-sm">
//           <h2 className="text-gray-500 mb-3">
//             Published
//           </h2>

//           <h1 className="text-5xl font-bold text-[#032B3A]">
//             {blogs.length}
//           </h1>
//         </div>
//       </div>

//       {/* Blog Table */}
//       <div className="bg-white rounded-2xl shadow-sm overflow-hidden">

//         <table className="w-full">
//           <thead className="bg-[#032B3A] text-white">
//             <tr>
//               <th className="text-left px-6 py-5">
//                 Blog Name
//               </th>
//               <th className="text-left px-6 py-5">
//                 Category
//               </th>
//               <th className="text-left px-6 py-5">
//                 Status
//               </th>
//               <th className="text-left px-6 py-5">
//                 Date
//               </th>
//             </tr>
//           </thead>

//           <tbody>
//             {blogs.map((blog: any) => (
//               <tr
//                 key={blog._id}
//                 className="border-b"
//               >
//                 <td className="px-6 py-5">
//                   {blog.title}
//                 </td>

//                 <td className="px-6 py-5">
//                   {blog.category?.name}
//                 </td>

//                 <td className="px-6 py-5">
//                   Published
//                 </td>

//                 <td className="px-6 py-5">
//                   {new Date(
//                     blog.createdAt
//                   ).toLocaleDateString()}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </DashboardLayout>
//   );
// }



// "use client";

// import DashboardLayout from "@/app/components/DashboardLayout";
// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function BlogPage() {

//   const [title, setTitle] = useState("");
// const [description, setDescription] = useState("");
// const [category, setCategory] = useState("");
// const [image, setImage] = useState<File | null>(null);
//   const [blogs, setBlogs] = useState<any[]>([]);
//   const [editingId, setEditingId] = useState<string | null>(null);

//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     category: "",
//   });

//   const fetchBlogs = async () => {
//     try {
//       const res = await axios.get("https://deshibackend.onrender.com/api/blog/all");
//       setBlogs(res.data.blogs);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchBlogs();
//   }, []);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleEdit = (blog: any) => {
//     setFormData({
//       title: blog.title || "",
//       description: blog.description || "",
//       category: blog.category || "",
//     });

//     setEditingId(blog._id);
//   };

//   const handleDelete = async (id: string) => {
//     try {
//       await axios.delete(`https://deshibackend.onrender.com/api/blog/delete/${id}`);
//       alert("Blog Deleted Successfully");
//       fetchBlogs();
//     } catch (error) {
//       console.log(error);
//       alert("Delete Failed");
//     }
//   };

  
// const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();

//   const data = new FormData();

//   // All fields append karo
//   data.append("title", formData.title);
//   data.append("category", formData.category);
//   data.append("description", formData.description);

//   if (image) {
//     data.append("image", image);
//   }

//   try {
//     if (editingId) {
//       await axios.put(
//         `https://deshibackend.onrender.com{editingId}`,
//         data,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       alert("Blog Updated Successfully");
//       setEditingId(null);
//     } else {
//       await axios.post(
//         "https://deshibackend.onrender.com",
//         data,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       alert("Blog Created Successfully");
//     }

//     setFormData({
//       title: "",
//       description: "",
//       category: "",
//     });

//     setImage(null);

//     fetchBlogs();
//   } catch (error) {
//     console.log(error);
//     alert("Something went wrong");
//   }
// };

//   return (
//     <DashboardLayout>
//       <h1 className="text-4xl font-bold text-[#032B3A] mb-8">
//         Blog Management
//       </h1>

//       {/* Cards */}
//       <div className="grid md:grid-cols-3 gap-6 mb-10">
//         <div className="bg-white p-6 rounded-2xl shadow-sm">
//           <h2>Total Blogs</h2>
//           <h1 className="text-5xl font-bold">{blogs.length}</h1>
//         </div>

//         <div className="bg-white p-6 rounded-2xl shadow-sm">
//           <h2>Categories</h2>
//           <h1 className="text-5xl font-bold">8</h1>
//         </div>

//         <div className="bg-white p-6 rounded-2xl shadow-sm">
//           <h2>Published</h2>
//           <h1 className="text-5xl font-bold">{blogs.length}</h1>
//         </div>
//       </div>

//       {/* Blog Table */}
//       <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-10">
//         <table className="w-full">
//           <thead className="bg-[#032B3A] text-white">
//             <tr>
//               <th className="px-6 py-5 text-left">Title</th>
//               <th className="px-6 py-5 text-left">Category</th>
//               <th className="px-6 py-5 text-left">Date</th>
//               <th className="px-6 py-5 text-left">Actions</th>
//             </tr>
//           </thead>

//           <tbody>
//             {blogs.map((blog) => (
//               <tr key={blog._id} className="border-b">
//                 <td className="px-6 py-5">{blog.title}</td>
//                 <td className="px-6 py-5">{blog.category}</td>
//                 <td className="px-6 py-5">
//                   {new Date(blog.createdAt).toLocaleDateString()}
//                 </td>

//                 <td className="px-6 py-5 flex gap-3">
//                   <button
//                     type="button"
//                     onClick={() => handleEdit(blog)}
//                     className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer"
//                   >
//                     Edit
//                   </button>

//                   <button
//                     type="button"
//                     onClick={() => handleDelete(blog._id)}
//                     className="bg-red-500 text-white px-4 py-2 rounded-lg cursor-pointer"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Form */}
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-8 rounded-2xl shadow-sm"
//       >
//         <h2 className="text-2xl font-bold mb-6">
//           {editingId ? "Edit Blog" : "Create Blog"}
//         </h2>
//   <div className="mb-6">
//   <input
//     type="file"
//     accept="image/*"
//     onChange={(e) => setImage(e.target.files?.[0] || null)}
//     className="w-full border p-4 rounded-xl"
//   />
// </div>
//         <div className="mb-6">
//           <input
//             type="text"
//             name="title"
//             placeholder="Blog Title"
//             value={formData.title}
//             onChange={handleChange}
//             className="w-full border p-4 rounded-xl"
//             required
//           />
//         </div>

//         <div className="mb-6">
//           <input
//             type="text"
//             name="category"
//             placeholder="Category"
//             value={formData.category}
//             onChange={handleChange}
//             className="w-full border p-4 rounded-xl"
//             required
//           />
//         </div>

//         <div className="mb-6">
//           <textarea
//             name="description"
//             placeholder="Description"
//             value={formData.description}
//             onChange={handleChange}
//             className="w-full border p-4 rounded-xl h-40"
//             required
//           />
//         </div>

//         <button
//           type="submit"
//           className="bg-[#d9b56d] px-8 py-4 rounded-xl font-bold"
//         >
//           {editingId ? "Update Blog" : "Create Blog"}
//         </button>
//       </form>
//     </DashboardLayout>
//   );
// }


"use client";

import DashboardLayout from "@/app/components/DashboardLayout";
import { useEffect, useState } from "react";
import axios from "axios";

export default function BlogPage() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [image, setImage] = useState<File | null>(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
  });

  const API = "https://deshibackend.onrender.com/api/blog";

  // Fetch Blogs
  const fetchBlogs = async () => {
    try {
      const res = await axios.get(`${API}/all`);
      setBlogs(res.data.blogs || []);
    } catch (error: any) {
      console.log("Fetch Error:", error.response?.data || error.message);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Handle Input Change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Edit Blog
  const handleEdit = (blog: any) => {
    setFormData({
      title: blog.title,
      description: blog.description,
      category: blog.category,
    });

    setEditingId(blog._id);
  };

  // Delete Blog
  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`${API}/delete/${id}`);
      alert("Blog Deleted Successfully");
      fetchBlogs();
    } catch (error: any) {
      console.log("Delete Error:", error.response?.data || error.message);
      alert("Delete Failed");
    }
  };

  // Submit Blog
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = new FormData();

    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("category", formData.category);

    if (image) {
      data.append("image", image);
    }

    try {
      if (editingId) {
        await axios.put(`${API}/update/${editingId}`, data);

        alert("Blog Updated Successfully");
      } else {
        await axios.post(`${API}/create`, data);

        alert("Blog Created Successfully");
      }

      setFormData({
        title: "",
        description: "",
        category: "",
      });

      setImage(null);
      setEditingId(null);

      fetchBlogs();
    } catch (error: any) {
      console.log("Submit Error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Image Upload Failed");
    }
  };

  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold mb-8">Blog Management</h1>

      {/* Blog Table */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-10">
        <table className="w-full">
          <thead className="bg-[#032B3A] text-white">
            <tr>
              <th className="px-6 py-5 text-left">Title</th>
              <th className="px-6 py-5 text-left">Category</th>
              <th className="px-6 py-5 text-left">Date</th>
              <th className="px-6 py-5 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {blogs.map((blog) => (
              <tr key={blog._id}>
                <td className="px-6 py-5">{blog.title}</td>
                <td className="px-6 py-5">{blog.category}</td>
                <td className="px-6 py-5">
                  {new Date(blog.createdAt).toLocaleDateString()}
                </td>
                <td className="px-6 py-5 flex gap-3">
                  <button
                    onClick={() => handleEdit(blog)}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(blog._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Blog Form */}
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl">
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
          className="w-full border p-4 rounded-xl mb-4"
        />

        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border p-4 rounded-xl mb-4"
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border p-4 rounded-xl mb-4"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border p-4 rounded-xl h-40 mb-4"
          required
        />

        <button
          type="submit"
          className="bg-[#d9b56d] px-8 py-4 rounded-xl"
        >
          {editingId ? "Update Blog" : "Create Blog"}
        </button>
      </form>
    </DashboardLayout>
  );
}