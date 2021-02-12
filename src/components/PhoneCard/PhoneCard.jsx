import React, { useState, useEffect } from 'react';

export const PhoneCard = ({
  chosenPhone,
  setChosenPhone,
  addToShoppingCart,
  phoneDetailes,
}) => {

  const partsToShow = ['availability', 'battery', 'storage', 'connectivity', 'android', 'sizeAndWeight', 'display', 'hardware', 'camera', 'additionalFeatures'];

  return (
    <div className="container-fluid">
      {phoneDetailes && (
        <div className="row">
          <div className="col-md-10">
            <img
              className="phone"
              src={phoneDetailes.images[0]}
              alt={phoneDetailes.name}
            />

            <button
              type="button"
              onClick={() => setChosenPhone(null)}
            >
              Back
            </button>

            <button
              type="button"
              onClick={() => addToShoppingCart(chosenPhone)}
            >
              Add to basket
            </button>

            <h1>{phoneDetailes.name}</h1>

            <p>{phoneDetailes.description}</p>

            <ul className="phone-thumbs">

              {phoneDetailes.images.map(img => (
                <img
                  key={`${phoneDetailes.id}` + `${img}`}
                  alt={phoneDetailes.id}
                  src={`${img}`}
                />
              ))}
            </ul>

            <ul className="specs">

            <li>
              <span>Availability and Networks</span>
              <dl>
                <dt>Availability</dt>
                <dd>{phoneDetailes.availability[0]}</dd>
              </dl>
            </li>

            <li>
              <span>Battery</span>
              <dl>
                <dt>Type</dt>
                <dd>{phoneDetailes.battery.type}</dd>
                <dt>Talk Time</dt>
                <dd>{phoneDetailes.battery.talkTime}</dd>
                <dt>Standby time (max)</dt>
                <dd>{phoneDetailes.battery.standbyTime}</dd>
              </dl>
            </li>

              <li>
                <span>Storage and Memory</span>
                <dl>
                  <dt>RAM</dt>
                  <dd>{phoneDetailes.storage.ram}</dd>
                  <dt>Internal Storage</dt>
                  <dd>{phoneDetailes.storage.flash}</dd>
                </dl>
              </li>

              <li>
                <span>Connectivity</span>
                <dl>
                  <dt>Network Support</dt>
                  <dd>{phoneDetailes.connectivity.cell}</dd>
                  <dt>WiFi</dt>
                  <dd>{phoneDetailes.connectivity.wifi}</dd>
                  <dt>Bluetooth</dt>
                  <dd>{phoneDetailes.connectivity.bluetooth}</dd>
                  <dt>Infrared</dt>
                  <dd>{phoneDetailes.connectivity.infrared ? '+' : '-'}</dd>
                  <dt>GPS</dt>
                  <dd>{phoneDetailes.connectivity.gps ? '+' : '-'}</dd>
                </dl>
              </li>

              <li>
                <span>Android</span>
                <dl>
                  <dt>OS Version</dt>
                  <dd>{phoneDetailes.android.os}</dd>
                  <dt>UI</dt>
                  <dd>{phoneDetailes.android.ui}</dd>
                </dl>
              </li>

              <li>
                <span>Size and Weight</span>
                <dl>
                  <dt>Dimensions</dt>
                    {phoneDetailes.sizeAndWeight.dimensions.map(det => (
                      <dd>{det}</dd>
                    ))}
                  <dt>Weight</dt>
                  <dd>{phoneDetailes.sizeAndWeight.weight}</dd>
                </dl>
              </li>

              <li>
                <span>Display</span>
                <dl>
                  <dt>Screen size</dt>
                  <dd>{phoneDetailes.display.screenResolution}</dd>
                  <dt>Screen resolution</dt>
                  <dd>{phoneDetailes.display.screenResolution}</dd>
                  <dt>Touch screen</dt>
                  <dd>{phoneDetailes.display.touchScreen ? '+' : '-'}</dd>
                </dl>
              </li>

              <li>
                <span>Hardware</span>
                <dl>
                  <dt>CPU</dt>
                  <dd>{phoneDetailes.hardware.cpu}</dd>
                  <dt>USB</dt>
                  <dd>{phoneDetailes.hardware.usb}</dd>
                  <dt>Audio / headphone jack</dt>
                  <dd>{phoneDetailes.hardware.audioJack}</dd>
                  <dt>FM Radio</dt>
                  <dd>{phoneDetailes.hardware.fmRadio ? '+' : '-'}</dd>
                  <dt>Accelerometer</dt>
                  <dd>{phoneDetailes.hardware.accelerometer ? '+' : '-'}</dd>
                </dl>
              </li>

              <li>
                <span>Camera</span>
                <dl>
                  <dt>Primary</dt>
                  <dd>{phoneDetailes.camera.primary}</dd>
                  <dt>Features</dt>
                  {phoneDetailes.camera.features.map(f => (
                    <dd>{f}</dd>
                  ))}
                </dl>
              </li>

              <li>
                <span>Additional Features</span>
                <dd>{phoneDetailes.additionalFeatures}</dd>
              </li>

            </ul>
          </div>
        </div>
      )}
    </div>

  );
}
