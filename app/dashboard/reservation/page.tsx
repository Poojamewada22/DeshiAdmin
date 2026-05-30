"use client";

import DashboardLayout from "@/app/components/DashboardLayout";
import { useState } from "react";

interface Booking {
  id: number;
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  status: string;
}

export default function ReservationPage() {
  const [bookings, setBookings] = useState<Booking[]>([
    {
      id: 1,
      name: "Rahul Sharma",
      phone: "9876543210",
      date: "2026-05-25",
      time: "7:00 PM",
      guests: 4,
      status: "Pending",
    },
    {
      id: 2,
      name: "Priya Verma",
      phone: "9876501234",
      date: "2026-05-26",
      time: "8:30 PM",
      guests: 2,
      status: "Confirmed",
    },
  ]);

  const updateStatus = (id: number, newStatus: string) => {
    setBookings(
      bookings.map((booking) =>
        booking.id === id ? { ...booking, status: newStatus } : booking
      )
    );
  };

  return (
    <DashboardLayout >
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-orange-600">
        Reservation / Booking Dashboard
      </h1>

      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <table className="w-full border-collapse">
          <thead className="bg-orange-500 text-white">
            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Phone</th>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">Time</th>
              <th className="p-4 text-left">Guests</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((booking) => (
              <tr
                key={booking.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="p-4">{booking.name}</td>
                <td className="p-4">{booking.phone}</td>
                <td className="p-4">{booking.date}</td>
                <td className="p-4">{booking.time}</td>
                <td className="p-4">{booking.guests}</td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-white text-sm ${
                      booking.status === "Confirmed"
                        ? "bg-green-500"
                        : booking.status === "Pending"
                        ? "bg-yellow-500"
                        : "bg-red-500"
                    }`}
                  >
                    {booking.status}
                  </span>
                </td>

                <td className="p-4">
                  <select
                    value={booking.status}
                    onChange={(e) =>
                      updateStatus(booking.id, e.target.value)
                    }
                    className="border px-3 py-2 rounded-lg"
                  >
                    <option>Pending</option>
                    <option>Confirmed</option>
                    <option>Cancelled</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    </DashboardLayout>
  );
}