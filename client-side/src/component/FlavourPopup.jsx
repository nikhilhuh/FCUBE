import React from "react";

function FlavourPopup() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 justify-center max-h-[180px] overflow-auto">
      {/* Brain Freezer checkbox Button */}
      <label className="flex items-center space-x-2 p-3 rounded-lg cursor-pointer hover:bg-green-200 transition-all">
        <input
          defaultChecked
          type="checkbox"
          name="flavour"
          id="brain-freezer"
          value="brain-freezer"
          className="form-checkbox h-5 w-5 accent-green-500 border-gray-300"
        />
        <span className="text-lg text-gray-800">Brain Freezer</span>
      </label>

      {/* Commissioner checkbox Button */}
      <label className="flex items-center space-x-2 p-3 rounded-lg cursor-pointer hover:bg-red-200 transition-all">
        <input
          type="checkbox"
          name="flavour"
          id="commissioner"
          value="commissioner"
          className="form-checkbox h-5 w-5 accent-red-500 border-gray-300"
        />
        <span className="text-lg text-gray-800">Commissioner</span>
      </label>

      {/* Four Seasons checkbox Button */}
      <label className="flex items-center space-x-2 p-3 rounded-lg cursor-pointer hover:bg-yellow-200 transition-all">
        <input
          type="checkbox"
          name="flavour"
          id="four-seasons"
          value="four-seasons"
          className="form-checkbox h-5 w-5 accent-yellow-500 border-gray-300"
        />
        <span className="text-lg text-gray-800">Four Seasons</span>
      </label>

      {/* X on the Beach checkbox Button */}
      <label className="flex items-center space-x-2 p-3 rounded-lg cursor-pointer hover:bg-pink-200 transition-all">
        <input
          type="checkbox"
          name="flavour"
          id="x-on-the-beach"
          value="x-on-the-beach"
          className="form-checkbox h-5 w-5 accent-pink-500 border-gray-300"
        />
        <span className="text-lg text-gray-800">X on the Beach</span>
      </label>

      {/* Dubai Special checkbox Button */}
      <label className="flex items-center space-x-2 p-3 rounded-lg cursor-pointer hover:bg-blue-200 transition-all">
        <input
          type="checkbox"
          name="flavour"
          id="dubai-special"
          value="dubai-special"
          className="form-checkbox h-5 w-5 accent-blue-500 border-gray-300"
        />
        <span className="text-lg text-gray-800">Dubai Special</span>
      </label>

      {/* Orange checkbox Button */}
      <label className="flex items-center space-x-2 p-3 rounded-lg cursor-pointer hover:bg-orange-200 transition-all">
        <input
          type="checkbox"
          name="flavour"
          id="orange"
          value="orange"
          className="form-checkbox h-5 w-5 accent-orange-500 border-gray-300"
        />
        <span className="text-lg text-gray-800">Orange</span>
      </label>

      {/* Guava checkbox Button */}
      <label className="flex items-center space-x-2 p-3 rounded-lg cursor-pointer hover:bg-green-200 transition-all">
        <input
          type="checkbox"
          name="flavour"
          id="guava"
          value="guava"
          className="form-checkbox h-5 w-5 accent-green-500 border-gray-300"
        />
        <span className="text-lg text-gray-800">Guava</span>
      </label>

      {/* Grapemint checkbox Button */}
      <label className="flex items-center space-x-2 p-3 rounded-lg cursor-pointer hover:bg-purple-200 transition-all">
        <input
          type="checkbox"
          name="flavour"
          id="grapemint"
          value="grapemint"
          className="form-checkbox h-5 w-5 accent-purple-500 border-gray-300"
        />
        <span className="text-lg text-gray-800">Grapemint</span>
      </label>

      {/* Grapeberry checkbox Button */}
      <label className="flex items-center space-x-2 p-3 rounded-lg cursor-pointer hover:bg-indigo-200 transition-all">
        <input
          type="checkbox"
          name="flavour"
          id="grapeberry"
          value="grapeberry"
          className="form-checkbox h-5 w-5 accent-indigo-500 border-gray-300"
        />
        <span className="text-lg text-gray-800">Grapeberry</span>
      </label>

      {/* Nightqueen checkbox Button */}
      <label className="flex items-center space-x-2 p-3 rounded-lg cursor-pointer hover:bg-blue-200 transition-all">
        <input
          type="checkbox"
          name="flavour"
          id="nightqueen"
          value="nightqueen"
          className="form-checkbox h-5 w-5 accent-blue-500 border-gray-300"
        />
        <span className="text-lg text-gray-800">Nightqueen</span>
      </label>

      {/* Nirvana checkbox Button */}
      <label className="flex items-center space-x-2 p-3 rounded-lg cursor-pointer hover:bg-pink-200 transition-all">
        <input
          type="checkbox"
          name="flavour"
          id="nirvana"
          value="nirvana"
          className="form-checkbox h-5 w-5 accent-pink-500 border-gray-300"
        />
        <span className="text-lg text-gray-800">Nirvana</span>
      </label>

      {/* Marijuana checkbox Button */}
      <label className="flex items-center space-x-2 p-3 rounded-lg cursor-pointer hover:bg-green-200 transition-all">
        <input
          type="checkbox"
          name="flavour"
          id="marijuana"
          value="marijuana"
          className="form-checkbox h-5 w-5 accent-green-500 border-gray-300"
        />
        <span className="text-lg text-gray-800">Marijuana</span>
      </label>
    </div>
  );
}

export default FlavourPopup;
