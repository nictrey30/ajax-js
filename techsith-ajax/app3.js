console.log('person1: shows ticket');
console.log('person2: shows ticket');

const promiseWife = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('ticket');
  }, 3000);
});

const getPopcorn = promiseWife.then(ticket => {
  console.log('husband: we should go in');
  console.log('wife: no, I am hungry!');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`got popcorn, now here is your ${ticket}`);
    }, 1000);
  });
});

const getButter = getPopcorn.then(popcorn => {
  console.log('husband: we should go in');
  console.log('wife: no, I need butter on my popcorn');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`got butter on ${popcorn}`);
    }, 1000);
  });
});

getButter.then(data => console.log(data));

console.log('person4: shows ticket');
console.log('person5: shows ticket');
