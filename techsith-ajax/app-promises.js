let promiseToCleanTheRoom = new Promise((resolve, reject) => {
  // cleaning the room
  // let isClean = true;
  let isClean = false;

  if (isClean) {
    resolve('Clean');
  } else {
    reject('not Clean');
  }
});

promiseToCleanTheRoom
  .then(response => console.log(`The room is ${response}`))
  .catch(err => console.log(`The room is ${err}`));
