import React, { useState, useEffect } from 'react';
import { getPhones } from './fetches';
import { ShoppingCart } from './components/ShoppingCart/ShoppingCart';
import { List } from './components/List/List';
import { PhoneCard } from './components/PhoneCard/PhoneCard';
import { getPhoneDetailes } from './fetches';

import logo from './logo.svg';
import './App.css';

function App() {
  const [phones, setPhones] = useState([]);
  const [searchRequest, setSearchRequest] = useState('');
  const [sortFlow, setSortFlow] = useState('name');
  const [shoppingCartContent, setShoppingCartContent] = useState([]);
  const [chosenPhone, setChosenPhone] = useState(null);
  const [phoneDetailes, setPhoneDetailes] = useState(null);

  useEffect(() => {
    if (chosenPhone) {
      getPhoneDetailes(chosenPhone.id)
        .then(detailes => setPhoneDetailes(detailes))
    }
  }, [chosenPhone]);

  useEffect(() => {
    getPhones().then(phones => setPhones(phones))
  }, []);

  function addToShoppingCart(newPhone) {
    setShoppingCartContent([
      ...shoppingCartContent,
      newPhone,
    ])
  };

  return (
    <div className="container-fluid">
      <div className="row">

        <div className="col-md-2">

          <section>
            <p>
              Search:
              {' '}
              <input
                type="text"
                value={searchRequest}
                onChange={
                  (event) => setSearchRequest(event.target.value)
                }
              />
            </p>

            <p>
              Sort by:
              {' '}
              <select
                onChange={(event) => setSortFlow(event.target.value)}
              >
                <option value="name">Alphabetical</option>
                <option value="age">Newest</option>
              </select>
            </p>
          </section>

          <section>
            <p>Shopping Cart:</p>
            {shoppingCartContent.length === 0
              ? <p>-empty yet-</p>
              : <ShoppingCart
                content={shoppingCartContent}
                setChosenPhone={setChosenPhone}
              />
            }
            <button
              type='button'
              onClick={() => setShoppingCartContent([])}
            >
              Clear Shopping Cart
            </button>
          </section>

        </div>

        <div className="col-md-10">
          {!chosenPhone
            ? (
              <ul className="phones">
                <List
                  phones={phones}
                  searchRequest={searchRequest}
                  sortFlow={sortFlow}
                  addToShoppingCart={addToShoppingCart}
                  setChosenPhone={setChosenPhone}
                />
              </ul>
            )
            : <PhoneCard
              chosenPhone={chosenPhone}
              setChosenPhone={setChosenPhone}
              addToShoppingCart={addToShoppingCart}
              phoneDetailes={phoneDetailes}
            />
          }
        </div>

      </div>
    </div>
  );
}

export default App;
