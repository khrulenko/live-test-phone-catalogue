import React from 'react';

export const PhoneCard = ({
  phoneCardContent,
  setPhoneCardContent,
}) => {

  return (
    <div>
      <p>THIS IS THE CARD!!!</p>
      <p>{phoneCardContent.name}</p>

      <button
        type='button'
        onClick={() => setPhoneCardContent([])}
      >
        BACK
      </button>
    </div>
  );
}
