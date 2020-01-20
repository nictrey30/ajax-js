let cleanRoom = () => {
  return new Promise((resolve, reject) => {
    resolve('Cleaned the room');
  });
};
let removeGarbage = () => {
  return new Promise((resolve, reject) => {
    resolve('remove Garbage');
    // reject('Garbage still in house');
  });
};
let winIcecream = () => {
  return new Promise((resolve, reject) => {
    resolve('won Icecream');
  });
};

cleanRoom()
  .then(response => {
    console.log(response);
    return removeGarbage();
  })
  .then(response => {
    console.log(response);
    return winIcecream();
  })
  .then(response => {
    console.log(response);
  })
  .catch(err => console.log(err));

// let doWork = async () => {
//   try {
//     let clean = await cleanRoom();
//     console.log(clean);
//     let garbage = await removeGarbage();
//     console.log(garbage);
//     let icecream = await winIcecream();
//     console.log(icecream);
//   } catch (err) {
//     console.log(err);
//   }
// };

// doWork();
