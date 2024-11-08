import React from "react";

const FruitPopup = () => {
  return (
    <div className="w-full grid grid-cols-1 max-h-[180px] min-h-[180px] overflow-auto gap-4 justify-center">
      {/* Pineapple Radio Button */}
      <label className="flex items-center space-x-2 p-2 rounded-lg cursor-pointer hover:bg-green-200 transition-all">
        <input
          type="radio"
          name="fruit"
          id="pineapple"
          value="pineapple"
          className="form-radio h-5 w-5 accent-green-500 border-gray-300"
        />
        <span className="text-lg text-gray-800">Pineapple</span>
      </label>

      {/* Apple Radio Button */}
      <label className="flex items-center space-x-2 p-2 rounded-lg cursor-pointer hover:bg-red-200 transition-all">
        <input
          defaultChecked
          type="radio"
          name="fruit"
          id="apple"
          value="apple"
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
          value="orange"
          className="form-radio h-5 w-5 accent-orange-500 border-gray-300"
        />
        <span className="text-lg text-gray-800">Orange</span>
      </label>
    </div>
  );
};

export default FruitPopup;
