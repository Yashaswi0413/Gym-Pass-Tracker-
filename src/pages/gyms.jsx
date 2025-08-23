import React from "react";
import GymCard from "../components/GymCard";

const gymsData = [
  {
    id: 1,
    name: "Iron Paradise Gym",
    address: "123 MG Road, Bangalore, India",
    contact: "+91 9876543210",
    dailyPassPrice: 300,
    monthlyPassPrice: 1500,
    hasUnusedPass: true,
    image: "https://via.placeholder.com/400x250",
  },
  {
    id: 2,
    name: "Muscle Factory",
    address: "456 Brigade Road, Bangalore, India",
    contact: "+91 9123456789",
    dailyPassPrice: 250,
    monthlyPassPrice: 1400,
    hasUnusedPass: false,
    image: "https://via.placeholder.com/400x250",
  },
];

const Gyms = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <h1 className="text-3xl font-bold text-center mb-8">Available Gyms</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {gymsData.map((gym) => (
          <GymCard key={gym.id} gym={gym} />
        ))}
      </div>
    </div>
  );
};

export default Gyms;
