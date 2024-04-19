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

// const getJSON = async function (url, errorMsg = 'Something went wrong!') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
//     return response.json();
//   });
// };

// const getCountryData = function (country) {
//   // country 1
//   getJSON(`https://restcountries.com/v3.1/name/${country}`, `Country not fount`)
//     .then(date => {
//       if (!date.borders) throw new Error('No Neighbours!');
//       renderCountry(date[0]);
//       const neighbour = date[0].borders[0];
//       if (!neighbour) throw new Error('No neighbour found!');

//       // country 2
//       return getJSON(
//         `https://restcountries.com/v3.1/alpha/${neighbour}`,
//         `Country not fount`
//       );
//     })
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`something went wrong!!! ${err.message}, Try again later!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('australia');
// });

// const whereAmI = function (lat, lan) {
//   fetch(`https://geocode.xyz/${lat},${lan}?geoit=json`)
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Problem with geoCoding! ${response.status}`);
//       return response.json();
//     })
//     .then(data => {
//       if (!data.country) throw new Error(`Problem with geoCoding!`);
//       console.log(data);
//       console.log(`You are in ${data.city} ${data.country}`);

//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//     })
//     .then(resp => {
//       if (!resp.ok) throw new Error(`Country not found ${resp.status}`);
//       return resp.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.log(`${err.message} Error!`))
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// whereAmI(52.508, 13.381);

// console.log('test start');
// setTimeout(() => console.log('o sec timer'), 0);
// Promise.resolve('Resolved promise one').then(res => console.log(res));

// Promise.resolve('Resolved promise two').then(res => {
//   console.log(res);
// });
// console.log('test end');

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lottery draw is happening!');
//   setTimeout(() => {
//     if (Math.random() >= 0.5) {
//       resolve('You Win 🥇');
//     } else {
//       reject(new Error('You Lost your money 💩'));
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying setTimout
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(1)
//   .then(() => {
//     console.log('1 second passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('2 second passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('3 second passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('4 seconds passed');
//   });

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

// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject('abc').catch(err => console.error(new Error(err)));

// const getPosition = function () {
//   return new Promise(function (reslove, reject) {
//     navigator.geolocation.getCurrentPosition(
//       position => reslove(position),
//       err => reject(err)
//     );
//     navigator.geolocation.getCurrentPosition(reslove, reject);
//   });
// };

// getPosition().then(pos => console.log(pos));

// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lan } = pos.coords;
//       return fetch(`https://geocode.xyz/${lat},${lan}?geoit=json`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Problem with geoCoding! ${response.status}`);
//       return response.json();
//     })
//     .then(data => {
//       if (!data.country) throw new Error(`Problem with geoCoding!`);
//       console.log(data);
//       console.log(`You are in ${data.city} ${data.country}`);

//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//     })
//     .then(resp => {
//       if (!resp.ok) throw new Error(`Country not found ${resp.status}`);
//       return resp.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.log(`${err.message} Error!`))
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', whereAmI);

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// const imgContainer = document.querySelector('.images');

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;

//     img.addEventListener('load', function () {
//       imgContainer.append(img);
//       resolve(img);
//     });

//     img.addEventListener('error', function () {
//       reject(new Error('Image not found'));
//     });
//   });
// };

// let currentImg;

// createImage('./img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('image 1 loaded');

//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('./img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('image loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));

// const getPosition = function () {
//   return new Promise(function (reslove, reject) {
//     navigator.geolocation.getCurrentPosition(reslove, reject);
//   });
// };

// const whereAmI = async function () {
//   try {
//     const pos = await getPosition();
//     const { latitude: lat, longitude: lan } = pos.coords;

//     const resGeo = await fetch(`https://geocode.xyz/${lat},${lan}?geoit=json`);
//     if (!resGeo.ok) throw new Error('Problem getting location data!');
//     const dataGeo = await resGeo.json();

//     const res = await fetch(
//       `https://restcountries.com/v3.1/name/${dataGeo.country}`
//     );
//     if (!res.ok) throw new Error('Problem getting country');
//     const data = await res.json();
//     renderCountry(data[0]);

//     return `You are in ${dataGeo.city}, ${dataGeo.country}`;
//   } catch (err) {
//     renderError(`💥 ${err}`);

//     // reject prmise returned from async function
//     throw err;
//   } finally {
//     countriesContainer.style.opacity = 1;
//   }
// };

// console.log('1: Will get location');

// const city = whereAmI();
// console.log(city);
// whereAmI()
//   .then(city => console.log(city))
//   .catch(err => console.error(`2: ${err.message}`))
//   .finally(() => console.log('3: finished getting location'));

// (async function () {
//   try {
//     const city = await whereAmI();
//     console.log(`2: ${city}`);
//   } catch (err) {
//     console.error(`2: ${err.message}`);
//   } finally {
//     console.log('3: finished getting location');
//   }
// })();

// const getJSON = async function (url, errorMsg = 'Something went wrong!') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
//     return response.json();
//   });
// };

// const get3Countries = async function (c1, c2, c3) {
//   try {
//     // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
//     // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
//     // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);

//     const data = await Promise.all([
//       getJSON(`https://restcountries.com/v3.1/name/${c1}`),
//       getJSON(`https://restcountries.com/v3.1/name/${c2}`),
//       getJSON(`https://restcountries.com/v3.1/name/${c3}`),
//     ]);

//     // console.log([data1.capital[0], data2.capital[0], data3.capital[0]]);
//     console.log(data.map(d => d[0].capital[0]));
//   } catch (err) {
//     console.log(err);
//   }
// };

// get3Countries('portugal', 'canada', 'tanzania');

// Promise.race
// (async function () {
//   const res = await Promise.race([
//     getJSON(`https://restcountries.com/v3.1/name/spain`),
//     getJSON(`https://restcountries.com/v3.1/name/germany`),
//     getJSON(`https://restcountries.com/v3.1/name/italy`),
//   ]);
// })();

// const timeout = function (s) {
//   return new Promise(function (_, reject) {
//     setTimeout(() => {
//       reject(new Error('request take too long'));
//     }, s * 1000);
//   });
// };

// Promise.race([getJSON(`https://restcountries.com/v3.1/name/italy`), timeout(5)])
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

// Promise.allSettled

// Promise.allSettled([
//   Promise.resolve('Succes'),
//   Promise.reject('Error'),
//   Promise.resolve('Another success'),
// ]).then(res => console.log(res));

// Promise.any

// Promise.any([
//   Promise.resolve('Success'),
//   Promise.reject('Error'),
//   Promise.resolve('Another success'),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

// let currentImg;

// createImage('./img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('image 1 loaded');

//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('./img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('image loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));

// const getPosition = function () {
//   return new Promise(function (reslove, reject) {
//     navigator.geolocation.getCurrentPosition(reslove, reject);
//   });
// };

// const loadPause = async function () {
//   try {
//     // load image 1
//     const img = await createImage('./img/img-1.jpg');
//     console.log('Image 1 loaded');
//     await wait(2);
//     img.style.display = 'none';

//     // load image 2
//     const img2 = await createImage('./img/img-2.jpg');
//     console.log('Image 2 loaded');
//     await wait(2);
//     img2.style.display = 'none';
//   } catch (err) {
//     console.error(err);
//   }
// };

// loadPause();

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    console.log(imgs);

    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);

    imgsEl.forEach(img => img.classList.add('parallel'));
  } catch (err) {
    console.log(err);
  }
};

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
