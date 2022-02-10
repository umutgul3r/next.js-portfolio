import { combineReducers } from "redux";
import { formDataReducer } from "./FormReducer";
import { imageUrlDataReducer } from "./PhotoReducer";
const combinedReducer = combineReducers({
  formData: formDataReducer,
  imageUrlData: imageUrlDataReducer,
});
export default combinedReducer;
