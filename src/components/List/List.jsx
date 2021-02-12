import React, { useState, useEffect } from 'react';

export const List = ({ phones, searchRequest, sortFlow }) => {
  const [phonesToShow, setPhonesToShow] = useState(phones);

  function sortByType(a, b) {
    if (typeof(a[sortFlow]) === 'number') {
      return a[sortFlow] - b[sortFlow];
    } else {
      return a[sortFlow].toLowerCase() > b[sortFlow].toLowerCase() ? 1 : -1;
    }
  }

  useEffect(() => {
    setPhonesToShow(
      phones.filter(
        phone => phone.name.toLowerCase().includes(searchRequest.toLowerCase())
      ).sort((a, b) => sortByType(a,b))
    )
  }, [phones, searchRequest, sortFlow]);

  return (
    <>
      <ul className="phones">
        {phonesToShow.map(phone => (
          <li 
            className="thumbnail"
            key={phone.id}
          >
            <a href={`#!/phones/${phone.id}`} className="thumb">
              <img alt={phone.id} src={phone.imageUrl} />
            </a>

            <div className="phones__btn-buy-wrapper">
              <a className="btn btn-success" href="#buy">
                Add
              </a>
            </div>

            <a href="#!/phones/motorola-xoom-with-wi-fi">{phone.name}</a>
            <p>
              {phone.snippet}
            </p>
          </li>
        ))}
      </ul>
    </>
  )
}
