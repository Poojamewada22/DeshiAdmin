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

  const fetchBlogs = async () => {
    try {
      const res = await axios.get(`${API}/all`);
      setBlogs(res.data.blogs || []);
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEdit = (blog: any) => {
    setFormData({
      title: blog.title,
      description: blog.description,
      category: blog.category,
    });

    setEditingId(blog._id);
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`${API}/delete/${id}`);

      alert("Blog Deleted Successfully");
      fetchBlogs();
    } catch (error: any) {
      alert("Delete Failed");
    }
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
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
        await axios.put(
          `${API}/update/${editingId}`,
          data
        );

        alert("Blog Updated Successfully");
      } else {
        await axios.post(
          `${API}/create`,
          data
        );

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
      alert(
        error.response?.data?.message ||
          "Upload Failed"
      );
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Heading */}
        <div>
          <h1 className="text-2xl md:text-4xl font-bold text-[#032B3A]">
            Blog Management
          </h1>

          <p className="text-gray-500 mt-2">
            Create, update and manage blogs
          </p>
        </div>

            {/* Blog Table */}
{/* <div className="w-full bg-white rounded-2xl shadow-sm overflow-hidden">
  <div className="overflow-x-auto">
    <table className="w-full min-w-[700px]">
      <thead className="bg-[#032B3A] text-white">
        <tr>
          <th className="px-4 md:px-6 py-4 text-left">
            Title
          </th>

          <th className="px-4 md:px-6 py-4 text-left">
            Category
          </th>

          <th className="px-4 md:px-6 py-4 text-left">
            Date
          </th>

          <th className="px-4 md:px-6 py-4 text-left">
            Actions
          </th>
        </tr>
      </thead>

      <tbody>
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <tr
              key={blog._id}
              className="border-b hover:bg-gray-50"
            >
              <td className="px-4 md:px-6 py-4">
                {blog.title}
              </td>

              <td className="px-4 md:px-6 py-4">
                {blog.category}
              </td>

              <td className="px-4 md:px-6 py-4">
                {new Date(
                  blog.createdAt
                ).toLocaleDateString()}
              </td>

              <td className="px-4 md:px-6 py-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      handleEdit(blog)
                    }
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 md:px-4 py-2 rounded-lg text-sm"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() =>
                      handleDelete(blog._id)
                    }
                    className="bg-red-500 hover:bg-red-600 text-white px-3 md:px-4 py-2 rounded-lg text-sm"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td
              colSpan={4}
              className="text-center py-10 text-gray-500"
            >
              No Blogs Found
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
</div> */}


<div className="w-full bg-white rounded-xl md:rounded-2xl shadow-sm overflow-hidden">
  <div className="w-full overflow-x-auto">
    <table className="w-full min-w-[750px]">
      <thead className="bg-[#032B3A] text-white">
        <tr>
          <th className="px-4 md:px-6 py-4 text-left font-semibold">
            Title
          </th>

          <th className="px-4 md:px-6 py-4 text-left font-semibold">
            Category
          </th>

          <th className="px-4 md:px-6 py-4 text-left font-semibold">
            Date
          </th>

          <th className="px-4 md:px-6 py-4 text-center font-semibold w-[180px]">
            Actions
          </th>
        </tr>
      </thead>

      <tbody>
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <tr
              key={blog._id}
              className="border-b hover:bg-gray-50 transition"
            >
              <td className="px-4 md:px-6 py-4 max-w-[300px]">
                <p className="font-medium text-gray-800 break-words">
                  {blog.title}
                </p>
              </td>

              <td className="px-4 md:px-6 py-4">
                <span className="inline-block bg-gray-100 px-3 py-1 rounded-full text-sm">
                  {blog.category}
                </span>
              </td>

              <td className="px-4 md:px-6 py-4 text-gray-600">
                {new Date(
                  blog.createdAt
                ).toLocaleDateString()}
              </td>

              <td className="px-4 md:px-6 py-4">
                <div className="flex items-center justify-center gap-2">
                  <button
                    onClick={() => handleEdit(blog)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm transition"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() =>
                      handleDelete(blog._id)
                    }
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm transition"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td
              colSpan={4}
              className="text-center py-10 text-gray-500"
            >
              No Blogs Found
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
</div>


          </div>
      

        {/* Blog Form */}
        <div className="bg-white rounded-2xl shadow-sm p-4 md:p-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-6">
            {editingId
              ? "Update Blog"
              : "Create New Blog"}
          </h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setImage(
                  e.target.files?.[0] || null
                )
              }
              className="w-full border rounded-xl p-3"
            />

            <input
              type="text"
              name="title"
              placeholder="Blog Title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-[#d9b56d]"
              required
            />

            <input
              type="text"
              name="category"
              placeholder="Blog Category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-[#d9b56d]"
              required
            />

            <textarea
              name="description"
              placeholder="Blog Description"
              value={formData.description}
              onChange={handleChange}
              rows={6}
              className="w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-[#d9b56d]"
              required
            />

            <button
              type="submit"
              className="w-full md:w-auto bg-[#d9b56d] hover:bg-[#c9a45d] px-8 py-4 rounded-xl font-semibold transition"
            >
              {editingId
                ? "Update Blog"
                : "Create Blog"}
            </button>
          </form>
        </div>
      
    </DashboardLayout>
  );
}