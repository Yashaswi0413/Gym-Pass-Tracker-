import React from "react";
import { useState } from "react";
import BuyPassModal from "./modals/BuyPassModal";

const GymCard = ({ gym }) => {
   const [isBuyOpen, setIsBuyOpen] = useState(false);
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden w-80">
      <img
        src={gym.image}
        alt={gym.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold">{gym.name}</h2>
        <p className="text-gray-600">{gym.address}</p>
        <p className="text-gray-700 mt-2">📞 {gym.contact}</p>
        <div className="mt-3">
          <p className="text-sm text-gray-600">
            Daily Pass: <span className="font-semibold">₹{gym.dailyPassPrice}</span>
          </p>
          <p className="text-sm text-gray-600">
            Monthly Pass: <span className="font-semibold">₹{gym.monthlyPassPrice}</span>
          </p>
        </div>
        {gym.hasUnusedPass && (
          <p className="mt-2 text-green-600 font-semibold">🎟 Unused Pass Available</p>
        )}
        <div className="flex justify-between mt-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          onClick={() => setIsBuyOpen(true)}>
            Buy Pass
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
            Sell Pass
          </button>
        </div>
      </div>
        <BuyPassModal
        gym={gym}
        isOpen={isBuyOpen}
        onClose={() => setIsBuyOpen(false)}
      />
    </div>
  );
};

export default GymCard;
