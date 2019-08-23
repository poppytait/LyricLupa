import React from "react";

const DropdownSelect = ({ onSelect }) => {
  return (
    <>
      <select onChange={onSelect}>
        <option value="track">Track</option>
        <option value="artist">Artist</option>
      </select>
    </>
  );
};

export default DropdownSelect;
