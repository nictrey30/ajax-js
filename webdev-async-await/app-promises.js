let p = new Promise((resolve, reject) => {
  // let a = 1 + 1;
  let a = 1 + 2;
  if (a === 2) {
    resolve('Success');
  } else {
    reject('failed');
  }
});

p.then(msg => console.log(`This is in the then: ${msg}`)).catch(err =>
  console.log(`This is in the catch: ${err}`)
);
