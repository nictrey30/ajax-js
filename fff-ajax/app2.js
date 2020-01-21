// we want to fetch the profile images of all the cats that a user owns
const fetch = require('node-fetch');

// Using Promises
/*
function fetchCatAvatars(userId) {
  return fetch(`https://catappapi.herokuapp.com/users/${userId}`)
    .then(response => response.json())
    .then(user => {
      // promises is an array of promises
      const promises = user.cats.map(catId =>
        fetch(`https://catappapi.herokuapp.com/cats/${catId}`)
          .then(response => response.json())
          .then(catData => catData.imageUrl)
      );
      return Promise.all(promises);
    });
}

const result = fetchCatAvatars(123);
result.then(data => data.forEach(catImage => console.log(catImage)));
*/

// Using async-await

async function fetchCatAvatars(userId) {
  const response = await fetch(
    `https://catappapi.herokuapp.com/users/${userId}`
  );
  const user = await response.json();
  return await Promise.all(
    user.cats.map(async function(catId) {
      const response = await fetch(
        `https://catappapi.herokuapp.com/cats/${catId}`
      );
      const catData = await response.json();
      return catData.imageUrl;
    })
  );
  /*
  const catImages = [];
  for (const catId of user.cats) {
    const response = await fetch(
      `https://catappapi.herokuapp.com/cats/${catId}`
    );
    const catData = await response.json();
    catImages.push(catData.imageUrl);
  }
  return catImages;
  */
}

const result = fetchCatAvatars(123);
result.then(data => console.log(data));
