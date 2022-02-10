import axios from "axios";
import { photoDetail } from "../redux/actions/Actions";

export const getPhotoDetail = (query) => {
  return async (dispatch) => {
    try {
      const response = await axios({
        method: "GET",
        url: `https://jsonplaceholder.typicode.com/photos/${query}`,
      });
      const responseData = response.data;

      dispatch(photoDetail(responseData));

      return responseData;
    } catch (error) {
      throw error.response.data;
    }
  };
};
