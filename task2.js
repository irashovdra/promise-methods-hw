function randomDelay(value) {
  const delay = Math.floor(Math.random() * 4000) + 1000;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
}

const racePromises = [
  randomDelay("Race Promise 1"),
  randomDelay("Race Promise 2"),
  randomDelay("Race Promise 3"),
  randomDelay("Race Promise 4"),
  randomDelay("Race Promise 5"),
];

Promise.race(racePromises)
  .then((result) => {
    console.log("Найшвидший проміс завершився першим:");
    console.log(result);
  })
  .catch((error) => {
    console.error("Помилка:", error);
  });
