import React, { useState } from "react";

const Dropdown = ({ title, options, func }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(title);

  const handleSelect = (value) => {
    setSelected(value);
    func(value);
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div className="relative w-64">
      {/* Selected Option (Dropdown Button) */}
      <div
        className="w-full px-4 py-2 rounded-lg border border-white/20 text-white bg-white/10 
                   backdrop-blur-lg focus:ring-2 focus:ring-white/30 outline-none 
                   transition-all duration-300 hover:bg-white/20 cursor-pointer select-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected}
      </div>

      {/* Dropdown Options */}
      {isOpen && (
        <div
          className="absolute w-full mt-2 bg-white/10 backdrop-blur-lg border border-white/20 
                     rounded-lg shadow-lg z-10 overflow-hidden"
        >
          {options.map((o, index) => (
            <div
              key={index}
              className="px-4 py-2 text-white hover:bg-white/20 transition-all cursor-pointer select-none"
              onClick={() => handleSelect(o)}
            >
              {o.toUpperCase()}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
