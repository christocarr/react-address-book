import React from 'react';

function OpenFormButton({ setDisplayForm, displayForm }) {
  const buttonText = displayForm ? `Close Form` : `Add New Contact`;

  const handleClick = () => {
    setDisplayForm((prevState) => !prevState);
  };
  return (
    <button onClick={handleClick} className="btn mb-6 w-48">
      {buttonText}
    </button>
  );
}

export default OpenFormButton;
