import React, { useState } from "react";

const BuyPassModal = ({ gym, isOpen, onClose }) => {
  const [coupon, setCoupon] = useState("");
  const [selectedPass, setSelectedPass] = useState("daily"); // default selection
  React.useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}, [isOpen]);

  if (!isOpen) return null;

  // Compute price based on selected pass
  let price = 0;
  if (selectedPass === "daily") price = gym.dailyPassPrice;
  else if (selectedPass === "monthly") price = gym.monthlyPassPrice;
  else if (selectedPass === "unused" && gym.hasUnusedPass) price = 0; // unused pass, can define your logic

  return (
<div
  className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50"
  onClick={onClose} // close when backdrop is clicked
>
  <div
    className="bg-white rounded-2xl p-6 w-96 relative border border-blue-500 shadow-lg"
    onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside modal
  >
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="text-xl font-bold">{gym.name}</h2>
        <p className="text-gray-600">{gym.address}</p>

        {/* Pass Type Dropdown */}
        <div className="mt-4">
          <label className="block font-semibold text-gray-700 mb-1">Select Pass</label>
          <select
            value={selectedPass}
            onChange={(e) => setSelectedPass(e.target.value)}
            className="border rounded-lg w-full px-3 py-2"
          >
            <option value="daily">Daily Pass</option>
            <option value="monthly">Monthly Pass</option>
            {gym.hasUnusedPass && <option value="unused">Unused Pass</option>}
          </select>
        </div>

        {/* Show Price */}
        <p className="mt-3 text-lg font-semibold">
          Price: ₹{price}
        </p>

        {/* Coupon */}
        <div className="mt-4">
          <label className="block text-gray-700 font-medium">Coupon Code</label>
          <input
            type="text"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            className="border rounded-lg w-full px-3 py-2 mt-1"
            placeholder="Enter coupon code"
          />
          <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Apply
          </button>
        </div>

        <p className="mt-3 text-sm text-gray-500 underline cursor-pointer">
          Terms & Conditions
        </p>

        <div className="mt-6 flex justify-end">
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            onClick={() => alert(`Proceed to payment for ${selectedPass} pass: ₹${price}`)}
          >
            Buy Pass
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyPassModal;
