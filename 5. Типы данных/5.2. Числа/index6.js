function randomInteger(min, max) {
  let randomInteger = min + Math.random() * (max + 1 - min);

  return Math.floor(randomInteger);
}
