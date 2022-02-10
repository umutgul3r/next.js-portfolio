import * as types from "../ActionTypes";
const initalProps = {
  formData: [],
};
export const formDataReducer = (state = initalProps, action) => {
  switch (action.type) {
    case types.FORM_DATA_ADD:
      state.formData.push(action.formData);
      return {
        ...state,
      };

    default:
      return state;
  }
};
export default formDataReducer;
