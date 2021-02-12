import React from 'react';

export const ShoppingCart = ({ content }) => {

  return (
    <ul>
      {content.map(phone => (
        <li>
          {phone.name}
        </li>
      ))}
    </ul>
  )
}
