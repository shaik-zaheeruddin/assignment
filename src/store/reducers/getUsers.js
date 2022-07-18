import { GET_USERS } from "../types";
const initialState = [];
function users(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_USERS:
      return [...payload];
    default:
      return [];
  }
}
export default users;
