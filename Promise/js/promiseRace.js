const recordVideoOne = new Promise((resolve, reject) => {
  resolve('Video 1 Recorded');
});

const recordVideoTwo = new Promise((resolve, reject) => {
  resolve('Video 2 Recorded');
});

const recordVideoThree = new Promise((resolve, reject) => {
  resolve('Video 3 Recorded');
});

// Promise.race API will run each promise in parallel, but will only return the quickest message
Promise.race([
  recordVideoTwo,
  recordVideoOne,
  recordVideoThree
]).then((message) => {
  console.log(message);  // In this case, message is "Video 2 Recorded"
});