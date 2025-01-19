import React from "react";

const Dropdown = ({ title, options, setCategory }) => {
  return (
    <div className="select-wrapper">
      <select defaultValue="0" name="format" id="format" onChange={(e) => setCategory(e.target.value)}>
        <option value="0" disabled>
          {title}
        </option>
        {options.map((o, index) => (
          <option key={index} value={o}>
            {o.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
