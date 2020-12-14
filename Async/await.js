/**
 * A demo of await keyword
 * 
 * the await keyword only works inside async functions, await can be put in front of
 * any async promise-based function to pause your code on that line until the promise fulfills,
 * then return the resulting value
 * 
 * note: the below functionalities are tested via await.html file
 */

const hello = async () => {
  return greeting = await Promise.resolve('hello');
};

hello().then(
  value => {
    console.log(value); // hello
  }
);

const imageUrl = 'http://localhost:5000/Assets/algorithm.png';

// fetch url data
const myFetch = async () => {
  // the Response interface of the Fetch API represents the response to a request.
  let response = await fetch(imageUrl, { mode: 'no-cors' });

  console.log('check out response: ');
  console.log(response);

  if (!response.ok) {
    throw new Error(`Http error! status: ${response.status}`);
  } else {
    // Response.blob() method returns a promise that resolves with a Blob.
    // The Blob object represents a blob, which is a file-like object of immutable, raw data;
    // they can be read as text or binary data,
    // or converted into a ReadableStream(files) so its methods can be used for processing the data.
    return await response.blob();
  }
};

myFetch().then(
  (blob) => {
    console.log('check out blob: ');
    console.log(blob); // Blob {size: 7117, type: "image/png"}

    let objectUrl = URL.createObjectURL(blob); // objectUrl: blob:http://localhost:5000/8e77a412-1540-44bc-bb33-5b757e3696f0
    let image = document.createElement('img');
    image.src = objectUrl;

    document.body.appendChild(image);
  }
).catch(
  (e) => {
    console.log(e);
  }
);