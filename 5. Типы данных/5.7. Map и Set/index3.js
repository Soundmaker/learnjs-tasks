let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys()); // keys() возвращает итерируемый объект, поэтому создаем массив

keys.push("more");

console.log(keys); // [ 'name', 'more' ]
