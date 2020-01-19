// fetch api
// fetch() -> returns a promise
fetch('todos/luigi.json')
  // response is an object
  .then(response => {
    console.log('resolved', response);
    // .json() get the response object data and parses it -> returns a promise
    return response.json();
  })
  .then(data => {
    // data is the data that we get back from the .json() promise resolved
    console.log(data);
  })
  .catch(err => {
    console.log('rejected', err);
  });
