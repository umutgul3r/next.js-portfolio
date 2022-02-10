import { FORM_DATA_ADD, IMAGE_URL_DATA, PHOTO_DETAIL } from "../ActionTypes";

export const formDataAdd = (payload) => {
  return {
    type: FORM_DATA_ADD,
    formData: payload,
  };
};
export const galleryImageDataAdd = (payload) => {
  return {
    type: IMAGE_URL_DATA,
    imageUrlData: payload,
  };
};

export const photoDetail = (payload) => {
  return {
    type: PHOTO_DETAIL,
    photoDetail: payload,
  };
};
