const userLeft = false;
const userWatchingCatMeme = true;

watchTutorialCallback = (callback, errorCallback) => {
  if (userLeft) {
    errorCallback({
      name: 'User Left',
      message: ':('
    });
  } else if (userWatchingCatMeme) {
    errorCallback({
      name: 'User Watching Cat Meme',
      message: 'WebDev < Cat'
    });
  } else {
    callback('Thumbs up');
  }
};

// watchTutorialCallback(
//   message => console.log(`Success: ${message}`),
//   error => console.log(`${error.name} ${error.message}`)
// );

watchTutorialPromise = () => {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: 'User Left',
        message: ':('
      });
    } else if (userWatchingCatMeme) {
      reject({
        name: 'User Watching Cat Meme',
        message: 'WebDev < Cat'
      });
    } else {
      resolve('Thumbs up');
    }
  });
};
watchTutorialPromise()
  .then(message => console.log(`Success: ${message}`))
  .catch(error => console.log(`${error.name} ${error.message}`));
