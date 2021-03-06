import { FETCH_USER } from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      // empty string when not logged in so return false if empty string
      return action.payload || false;
    default:
      return state;
  }
}
