import { ADD_NAME, EDIT_NAME } from "../types";
const initialState = "";
function operating(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_NAME:
    case EDIT_NAME:
      return payload;
    default:
      return state;
  }
  //so when first time there is no state the
  //it is just  it returns "" and next time when we change the state it will be the new state
}
export default operating;
