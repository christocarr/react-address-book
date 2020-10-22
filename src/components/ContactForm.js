import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PostcodeSearch from "./PostcodeSearch";

function ContactForm({ address }) {
  const [postcodeSearch, setPostcodeSearch] = useState("");

  const [contactFirstLine, setContactFirstLine] = useState("");
  const [contactSecondLine, setContactSecondLine] = useState("");
  const [contactTown, setContactTown] = useState("");
  const [contactCounty, setContactCounty] = useState("");
  const [contactPostcode, setContactPostcode] = useState("");

  useEffect(() => {
    console.log(address);
    if (address) {
      const newAddress = address.value.split(",");
      setContactFirstLine(newAddress[0]);
      setContactSecondLine(newAddress[1]);
      setContactTown(newAddress[5]);
      setContactCounty(newAddress[6]);
      setContactPostcode(postcodeSearch);
    }
  }, [postcodeSearch, address]);

  return (
    <div>
      <PostcodeSearch setPostcodeSearch={setPostcodeSearch} />
      <form>
        <input
          value={contactFirstLine}
          onChange={(e) => setContactFirstLine(e.target.value)}
          type="text"
          name="firstLine"
          placeholder="first line"
        />
        <input
          value={contactSecondLine}
          onChange={(e) => setContactSecondLine(e.target.value)}
          type="text"
          name="secondLine"
          placeholder="second line"
        />
        <input
          value={contactTown}
          onChange={(e) => setContactTown(e.target.value)}
          type="text"
          name="town"
          placeholder="town"
        />
        <input
          value={contactCounty}
          onChange={(e) => setContactCounty(e.target.value)}
          type="text"
          name="county"
          placeholder="county"
        />
        <input
          value={contactPostcode}
          onChange={(e) => setContactPostcode(e.target.value)}
          type="text"
          name="postcode"
          placeholder="postcode"
        />
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { address: state.selectedAddress };
};

export default connect(mapStateToProps)(ContactForm);
