import React from "react";
import GymCard from "../components/GymCard";
import gymsData from "../../dummy_data/gyms.json"
// const gymsData = gymsData

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
