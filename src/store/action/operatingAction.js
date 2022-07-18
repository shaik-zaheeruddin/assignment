import { ADD_NAME, EDIT_NAME } from "../types";

export const addAction = (str) => {
  return (dispatch) => {
    dispatch({ type: ADD_NAME, payload: str });
  };
};
