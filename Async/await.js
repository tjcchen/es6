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