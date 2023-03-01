function random(min, max) {
  return min + Math.random() * (max - min);
}
for (let i = 0; i < 10; i++) {
  console.log(random(1, 5));
}
