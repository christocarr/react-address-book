import { combineReducers } from "redux";

const selectedAddressReducer = (selectedAddress = null, action) => {
  if (action.type === "ADDRESS_SELECTED") {
    return action.payload;
  }

  return selectedAddress;
};

export default combineReducers({
  selectedAddress: selectedAddressReducer
});