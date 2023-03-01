// Если обе функции будут возвращать один объект, то (new A() == new B())
const obj = {};

function A() {
  return obj;
}
function B() {
  return obj;
}

let a = new A();
let b = new B();

console.log(a == b); // true
