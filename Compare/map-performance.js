"use strict";

const runCount = 100;
const keyConut = 10000;

let map  = new Map();
let keys = new Array(keyConut);

for (let i = 0; i < keyConut; i++) {
  keys[i] = {};
}

for (let key of keys) {
  map.set(key, true);
}

// The process.hrtime() method returns the current high-resolution real time in a [seconds, nanoseconds] tuple Array,
// where nanoseconds is the remaining part of the real time that can't be represented in second precision.
let startTime = process.hrtime();

for (let i = 0; i < runCount; i++) {
  for (let key of keys) {
    let value = map.get(key);
    if (value !== true) throw new Error();
  }
}

let elapsed = process.hrtime(startTime);
let [seconds, nanoseconds] = elapsed;
let milliseconds = Math.round(seconds * 1e3 + nanoseconds / 1e6);

console.log(`${process.version} ${milliseconds}ms`);
