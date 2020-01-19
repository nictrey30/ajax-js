// throwing and catching errors
const getTodos = async () => {
  const response = await fetch('todos/luigis.json');
  if (response.status !== 200) {
    // when we throw a new error inside an async function, the promise returned by the async function is rejected
    throw new Error('cannot fetch the data');
  }
  const data = await response.json();
  return data;
};
getTodos()
  .then(data => console.log('resolved', data))
  .catch(err => console.log('rejected', err.message));
