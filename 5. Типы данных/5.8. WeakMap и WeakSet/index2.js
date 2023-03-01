// Чтобы удаленный из messages обЪект удалялся и в нашей структуре данных, используем WeakMap.

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];

let messagesDates = new WeakMap();

messagesDates.set(messages[0], new Date());
messagesDates.set(messages[1], new Date());

console.log(messagesDates.has(messages[0])); // true
console.log(messagesDates.has(messages[1])); // true

messages.shift();

console.log(messagesDates.has(messages[0])); // true
console.log(messagesDates.has(messages[1])); // false
