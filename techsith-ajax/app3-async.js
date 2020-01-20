console.log('person1: shows ticket');
console.log('person2: shows ticket');

const promiseWife = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('ticket IronMan');
    }, 3000);
  });
};
const getPopcorn = ticket => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`got popcorn, now give me the ${ticket}`);
    }, 3000);
  });
};
const getButter = ticket => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`got butter, here is the ${ticket}`);
    }, 3000);
  });
};

const goToMovie = async () => {
  try {
    const ticket = await promiseWife();
    console.log('husband: we should go in');
    console.log('wife: no, I am hungry!');
    const popcorn = await getPopcorn(ticket);
    console.log(popcorn);
    console.log('wife: no, I need butter on my popcorn');
    const butter = await getButter(ticket);
    console.log(butter);
    return 'Finally!';
  } catch (err) {
    console.log;
  }
};

goToMovie().then(msg => console.log(msg));
console.log('person4: shows ticket');
console.log('person5: shows ticket');
