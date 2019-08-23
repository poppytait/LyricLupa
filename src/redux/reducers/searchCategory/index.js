import { TOGGLE_SEARCH_CATEGORY } from "../../actions/action-types";

const initialState = {
  searchCategory: "track"
};

export default function searchCategoryReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SEARCH_CATEGORY:
      return {
        ...state,
        searchCategory: action.payload
      };

    default:
      return state;
  }
}
