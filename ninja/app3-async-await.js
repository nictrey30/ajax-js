// getTodos() will contain all our async code
const getTodos = async () => {
  // we can use await instead of tacking on the then method
  // await will stop the assignment until the promise has resolved
  // once the fetch promise has resolved we can take the response value and assign it to the response variable(await pauses the response assignment until the promise has resolved)
  const response = await fetch('todos/luigi.json');
  // console.log(response); -> get back the response object from fetch
  const data = await response.json();
  // console.log(data);
  return data;
};

// whenever we call an async function, that always returns a promise
getTodos()
  .then(data => console.log('resolved: ', data))
  .catch();

/*
fetch('todos/luigi.json')
  .then(response => {
    console.log('resolved', response);
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log('rejected', err);
  });
*/
