/**
 * A demo of await keyword
 * 
 * the await keyword only works inside async functions, await can be put in front of
 * any async promise-based function to pause your code on that line until the promise fulfills,
 * then return the resulting value
 * 
 */

const hello = async () => {
  return greeting = await Promise.resolve('hello');
};

hello().then(
  value => {
    console.log(value); // hello
  }
);

const imageUrl = 'http://www.tjcchen.cn/love.png';

// fetch url data
const myFetch = async () => {
  let response = await fetch(imageUrl, { mode: 'no-cors' });
  if (!response.ok) {
    throw new Error(`Http error! status: ${response.status}`);
  } else {
    return await response.blob();
  }
};

myFetch().then(
  (blob) => {
    let objectUrl = URL.createObjectURL(blob);
    let image = document.createElement('img');
    image.src = objectUrl;
    document.body.appendChild(image);
  }
).catch(
  (e) => {
    console.log(e);
  }
);