import React, { useState } from "react";
import { searchTrack } from "../../redux/actions/searchTrackActions";
import { connect } from "react-redux";
import DropdownSelect from "../DropdownSelect/index.jsx";

const SearchBar = ({ dispatch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleOnChange = e => {
    setSearchValue(e.target.value);
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    console.log("return of the lights");
    resetInputField();
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const dispatchSearchTrack = () => {
    const results = dispatch(searchTrack(searchValue));
    console.log(results);
  };

  return (
    <>
      <DropdownSelect />
      <form onSubmit={handleOnSubmit}>
        <input type="text" onChange={handleOnChange} value={searchValue} />
        <input type="button" value="redux" onClick={dispatchSearchTrack} />
      </form>
    </>
  );
};

const mapStateToProps = state => state.trackReducer;

export default connect(mapStateToProps)(SearchBar);
