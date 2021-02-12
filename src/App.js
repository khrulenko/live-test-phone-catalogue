import React, { useState, useEffect } from 'react';
import { getPhones } from './fetches';

import logo from './logo.svg';
import './App.css';

import { List } from './components/List/List';

function App() {
  const [phones, setPhones] = useState([]);
  const [searchRequest, setSearchRequest] = useState('');
  const [sortFlow, setSortFlow] = useState('');

  useEffect(() => {
    getPhones().then(phones => setPhones(phones))
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <section>
            <p>
              Search:
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
              <select>
                <option value="name">Alphabetical</option>
                <option value="age">Newest</option>
              </select>
            </p>
          </section>

          <section>
            <p>Shopping Cart</p>
            <ul>
              <li>Phone 1</li>
              <li>Phone 2</li>
              <li>Phone 3</li>
            </ul>
          </section>
        </div>

        <div className="col-md-10">
          <ul className="phones">

            <List
              phones={phones}
              searchRequest={searchRequest}
            />

          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
