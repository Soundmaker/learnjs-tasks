function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

let arr = [1, 2, 3];

shuffle(arr);
console.log(arr); // [ 2, 3, 1 ]

shuffle(arr);
console.log(arr); // [ 3, 2, 1 ]

shuffle(arr);
console.log(arr); // [ 1, 3, 2 ]
