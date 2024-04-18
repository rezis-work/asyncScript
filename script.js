'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// const getCountryDataDemo = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `
//     <article class="country">
//       <img class="country__img" src="${data.flags.png}" alt="${
//       data.flags.alt
//     }" />
//       <div class="country__data">
//         <h3 class="country__name">${data.name.common}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(
//           +data.population / 1000000
//         ).toFixed(1)} M</p>
//         <p class="country__row"><span>🗣️</span>${
//           Object.keys(data.languages)[0]
//         }</p>
//         <p class="country__row"><span>💰</span>${
//           Object.keys(data.currencies)[0]
//         }</p>
//       </div>
//     </article>
//   `;

//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryDataDemo('usa');
// getCountryDataDemo('italy');
// getCountryDataDemo('germany');

const renderCountry = function (data, className = '') {
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flags.png}" alt="${
    data.flags.alt
  }" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} M</p>
        <p class="country__row"><span>🗣️</span>${
          Object.keys(data.languages)[0]
        }</p>
        <p class="country__row"><span>💰</span>${
          Object.keys(data.currencies)[0]
        }</p>
      </div>
    </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
};

// const getCountryAndNeighbour = function (country) {
//   // ajax call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // render country 1
//     renderCountry(data);

//     // Get neiggbour country 2
//     const [neighbour] = data.borders;

//     if (!neighbour) return;

//     // ajax call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const [data] = JSON.parse(this.responseText);
//       console.log(data);

//       renderCountry(data, 'neighbour');
//     });
//   });
// };

// getCountryAndNeighbour('poland');

// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 second past');
//     setTimeout(() => {
//       console.log('3 second past');
//       setTimeout(() => {
//         console.log('4 second past');
//       }, 4000);
//     }, 3000);
//   }, 2000);
// }, 1000);

// const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

// const request = fetch('https://restcountries.com/v3.1/name/portugal');
// console.log(request);

const getJSON = function (url, errorMsg = 'Something went wrong!') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
    return response.json();
  });
};

const getCountryData = function (country) {
  // country 1
  fetch()
    .then(response => {
      console.log(response);
      if (!response.ok)
        throw new Error(`Country not found! ${response.status}`);
      return response.json();
    })
    .then(date => {
      renderCountry(date[0]);
      // const neighbour = date[0].borders[0];
      const neighbour = 'dksajkjdsak';

      if (!neighbour) return;

      // country 2
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(resp => {
      if (!resp.ok) throw new Error(`Country not fount ${resp.status}`);
      return resp.json();
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`something went wrong!!! ${err.message}, Try again later!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('turkey');
});

// getCountryData('asdsadsa');
