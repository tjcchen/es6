(function() {
  "use strict";

  let promise = new Promise((resolve, reject) => {
    let a = 1 + 2;
    if (a === 2) {
      resolve('Success');  // success callback
    } else {
      reject('Failed');  // failed callback
    }
  });

  promise.then((msg) => {  // do this when success
    console.log('This is in the then ' + msg);
  }).catch((msg) => {  // do this when failed
    console.log('This is in the catch ' + msg);
  });
})();