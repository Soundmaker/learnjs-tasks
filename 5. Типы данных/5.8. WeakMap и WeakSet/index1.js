// Чтобы удаленный из messages обЪект удалялся и в нашей структуре данных, используем WeakSet.

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];

let readMessages = new WeakSet([messages[0], messages[1]]);

console.log(readMessages.has(messages[0])); // true
console.log(readMessages.has(messages[1])); // true

messages.shift();

console.log(readMessages.has(messages[0])); // true
console.log(readMessages.has(messages[1])); // false
