import * as types from "../ActionTypes";
let initialState = {
  imageUrlData: [],
  photoDetail: [],
};
export const imageUrlDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.IMAGE_URL_DATA:
      state.imageUrlData = action.imageUrlData;
      return {
        ...state,
      };
    case types.PHOTO_DETAIL:
      state.photoDetail = action.photoDetail;
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default imageUrlDataReducer;
