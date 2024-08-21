function delayedPromise(value, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
}

const promises = [
  delayedPromise("Promise 1", 2000),
  delayedPromise("Promise 2", 1000),
  delayedPromise("Promise 3", 3000),
  delayedPromise("Promise 4", 1500),
  delayedPromise("Promise 5", 2500),
];

Promise.all(promises)
  .then((results) => {
    console.log("Усі проміси завершено:");
    console.log(results);
  })
  .catch((error) => {
    console.error("Помилка:", error);
  });
