import axios from "axios";
import { galleryImageDataAdd } from "../redux/actions/Actions";

export const getGalleryImage = (page) => {
  return async (dispatch) => {
    try {
      const response = await axios({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/photos/?_limit=50",
      });
      const responseData = response.data;

      dispatch(galleryImageDataAdd(responseData));

      return responseData;
    } catch (error) {
      throw error.response.data;
    }
  };
};
