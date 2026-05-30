

 "use client";

import DashboardLayout from "@/app/components/DashboardLayout";
import { useState } from "react";

interface Food {
  name: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

export default function MenuPage() {
  const [foods, setFoods] = useState<Food[]>([]);
  const [formData, setFormData] = useState<Food>({
    name: "",
    price: "",
    category: "",
    description: "",
    image: "",
  });
  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddFood = () => {
    if (!formData.name || !formData.price) {
      alert("Fill all required fields");
      return;
      
    }

    setFoods([...foods, formData]);

    setFormData({
      name: "",
      price: "",
      category: "",
      description: "",
      image: "",
    });
  };

  return (
    <DashboardLayout>
   
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Food Management</h1>

      {/* Form */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Add Food Item</h2>

        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Food Name"
            value={formData.name}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />
        </div>

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="border p-3 rounded-lg w-full mt-4"
        />

        <button
          onClick={handleAddFood}
          className="bg-green-600 text-white px-6 py-3 rounded-lg mt-4"
        >
          Add Food
        </button>
      </div>

      {/* Food List */}
      <div className="grid grid-cols-3 gap-6">
        {foods.map((food: any, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-4">
            <img
              src={food.image || "https://via.placeholder.com/200"}
              alt={food.name}
              className="w-full h-40 object-cover rounded-lg"
            />

            <h3 className="text-xl font-bold mt-3">{food.name}</h3>
            <p className="text-green-600 font-semibold">₹{food.price}</p>
            <p>{food.category}</p>
            <p className="text-gray-600">{food.description}</p>

            <div className="flex gap-3 mt-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                Edit
              </button>

              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
                onClick={() =>
                  setFoods(foods.filter((_, i) => i !== index))
                }
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </DashboardLayout>
  );
}