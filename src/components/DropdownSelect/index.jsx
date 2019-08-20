import React from "react";

const DropdownSelect = () => {
  return (
    <>
      <select>
        <option value="track">Track</option>
        <option value="artist">Artist</option>
        <option value="lyrics">Lyrics</option>
        <option value="album">Album</option>
      </select>
    </>
  );
};

export default DropdownSelect;
