/**
 * A demo of async function.
 * 
 * when the async keyword is added to functions is to tell functions to return a promise
 * rather than directly returning the value.
 * 
 */

function hello1() {
  return 'hello1';
}

console.log(hello1()); // hello1

// async keyword will turn a normal function into an async function
// the return value is a promise
async function hello2() {
  return 'hello2';
}

const hello2Promise = hello2(); // Promise { 'hello2' }
hello2Promise.then(
  value => {
    console.log(value); // hello2
  },
  reason => {
    console.log(reason);
  }
);

// Several other ways of declaring an async function expression
const hello3 = async function() {
  return 'hello3';
};

const hello3Promise = hello3();
hello3Promise.then(
  value => {
    console.log(value); // hello3
  }
);

// arrow function
const hello4 = async () => {
  return 'hello4';
};

const hello4Promise = hello4();
hello4Promise.then(console.log); // hello4