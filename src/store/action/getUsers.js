import { GET_USERS } from "../types";
import axios from "axios";
export const getUsers = () => {
  return async (dispatch) => {
    const payload = await (
      await axios.get("https://reqres.in/api/users?page=2")
    ).data.data;
    console.log("2");
    dispatch({
      type: GET_USERS,
      payload,
    });
  };
};
