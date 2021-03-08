import React from 'react';

function OpenFormButton({ setDisplayForm, displayForm }) {
  const buttonText = displayForm ? `Close Form` : `Add New Contact`;

  const handleClick = () => {
    setDisplayForm((prevState) => !prevState);
  };
  return <button onClick={handleClick}>{buttonText}</button>;
}

export default OpenFormButton;
