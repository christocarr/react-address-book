//action creator
export const selectedAddress = (address) => {
  return {
    type: "ADDRESS_SELECTED",
    payload: address
  };
};