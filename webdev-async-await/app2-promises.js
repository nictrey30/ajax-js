function makerequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making request to ${location}`);
    if (location === 'Google') {
      resolve('Google says hi');
    } else {
      reject('We can only talk to Google');
    }
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log(`Processing response`);
    resolve(`Extra information + ${response}`);
  });
}
/*
makerequest('Facebook')
  .then(response => {
    console.log('Response received');
    return processRequest(response);
  })
  .then(processedResponse => console.log(processedResponse))
  .catch(err => console.log(err));
*/

async function doWork() {
  try {
    // if we dont't put await in front, it will just return the Promise, not the result of that Promise
    const response = await makerequest('Facebook');
    console.log('Response Received');
    const processedResponse = await processRequest(response);
    console.log(processedResponse);
  } catch (err) {
    console.log(err);
  }
}
doWork();
