import React from "react";
import { useState } from "react";

const FruitPopup = () => {
  const [selectedFruit, setSelectedFruit] = useState("Apple");

  const handleSelectionChange = (event) => {
    setSelectedFruit(event.target.value);
  };
  return (
    <div className="w-full grid grid-cols-1 max-h-[180px] min-h-[180px] overflow-auto gap-4 justify-center">
      {/* Pineapple Radio Button */}
      <label className="flex items-center space-x-2 p-2 rounded-lg cursor-pointer hover:bg-green-200 transition-all">
        <input
          type="radio"
          name="fruit"
          id="pineapple"
          value="Pineapple"
          checked={selectedFruit === "Pineapple"}
          onChange={handleSelectionChange}
          className="form-radio h-5 w-5 accent-green-500 border-gray-300"
        />
        <span className="text-lg text-gray-800">Pineapple</span>
      </label>

      {/* Apple Radio Button */}
      <label className="flex items-center space-x-2 p-2 rounded-lg cursor-pointer hover:bg-red-200 transition-all">
        <input
          type="radio"
          name="fruit"
          id="apple"
          value="Apple"
          checked={selectedFruit === "Apple"}
          onChange={handleSelectionChange}
          className="form-radio h-5 w-5 accent-red-500 border-gray-300"
        />
        <span className="text-lg text-gray-800">Apple</span>
      </label>

      {/* Orange Radio Button */}
      <label className="flex items-center space-x-2 p-2 rounded-lg cursor-pointer hover:bg-orange-200 transition-all">
        <input
          type="radio"
          name="fruit"
          id="orange"
          value="Orange"
          checked={selectedFruit === "Orange"}
          onChange={handleSelectionChange}
          className="form-radio h-5 w-5 accent-orange-500 border-gray-300"
        />
        <span className="text-lg text-gray-800">Orange</span>
      </label>
    </div>
  );
};

export default FruitPopup;
