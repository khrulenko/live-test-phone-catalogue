import React from 'react';

export const PhoneCard = ({
  phoneCardContent,
  setPhoneCardContent,
}) => {

  return (
    <div>
      <button
        type='button'
        onClick={() => setPhoneCardContent([])}
      >
        BACK
      </button>

      <p>THIS IS THE {phoneCardContent.name}!</p>
      <p>{phoneCardContent.snippet}!</p>
      <img alt={phoneCardContent.id} src={phoneCardContent.imageUrl} />

    </div>
  );
}
