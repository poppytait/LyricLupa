import React, { useState } from "react";
import { search } from "../../redux/actions/searchTrackActionCreator";
import { connect } from "react-redux";
import DropdownSelect from "../DropdownSelect/index.jsx";
import { toggleSearchCategory } from "../../redux/actions/searchCategory";

const SearchBar = ({ dispatch, searchCategory }) => {
  const [query, setQuery] = useState("");

  const handleOnChange = e => {
    setQuery(e.target.value);
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    console.log("return of the lights");
    resetInputField();
  };

  const resetInputField = () => {
    setQuery("");
  };

  const dispatchSearchTrack = () => {
    console.log(searchCategory);
    dispatch(search(query, searchCategory));
  };

  const handleSearchCategorySelect = e => {
    dispatch(toggleSearchCategory(e.target.value));
  };

  return (
    <>
      <DropdownSelect onSelect={handleSearchCategorySelect} />
      <form onSubmit={handleOnSubmit}>
        <input type="text" onChange={handleOnChange} value={query} />
        <input type="button" value="redux" onClick={dispatchSearchTrack} />
      </form>
    </>
  );
};

const mapStateToProps = state => {
  return {
    searchCategory: state.searchCategory.searchCategory
  };
};

export default connect(mapStateToProps)(SearchBar);
