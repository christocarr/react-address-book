import React from "react";
import { connect } from "react-redux";
import { selectedAddress } from "../actions";
import AsyncSelect from "react-select/async";

function PostcodeSearch(props) {
  const getAddresses = async (postcode) => {
    props.setPostcodeSearch(postcode.toUpperCase());
    const APIKEY1 = "HF5s4vq7pEupvXLhw7uCWg28754"; //paid
    const APIKEY2 = "HVgKKzu4o0as4MlYxN64XA28757";
    const APIKEY3 = "c-XX_NRqWkqslKxlwPVUdQ28807";
    const res = await fetch(
      `https://api.getAddress.io/find/${postcode}?api-key=${APIKEY1}`
    );
    const data = await res.json();
    const options = data.addresses.map((v) => ({ label: v, value: v }));
    return options;
  };

  const handleAddressSelect = (selected) => {
    props.selectedAddress(selected);
  };

  return (
    <div>
      <AsyncSelect
        loadOptions={getAddresses}
        placeholder="search for postcode"
        onChange={handleAddressSelect}
        filterOption={false}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return { selectedAddress: state.selectedAddress };
};

export default connect(mapStateToProps, {
  selectedAddress
})(PostcodeSearch);
