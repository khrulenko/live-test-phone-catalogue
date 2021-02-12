const url = 'https://mate-academy.github.io/phone-catalogue-static/api/phones.json';

export function getPhones() {
  return fetch(`https://mate-academy.github.io/phone-catalogue-static/api/phones.json`)
    .then(promise => promise.json());
}

