import { TOGGLE_SEARCH_CATEGORY } from "../action-types";

export function toggleSearchCategory(searchCategory) {
  return { type: TOGGLE_SEARCH_CATEGORY, payload: searchCategory };
}
