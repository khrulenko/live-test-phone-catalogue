import React from 'react';

export const ShoppingCart = ({ content }) => {

  return (
    <ul>
      {content.map(phone => (
        <li key={phone.id}>
          {phone.name}
        </li>
      ))}
    </ul>
  );
}
