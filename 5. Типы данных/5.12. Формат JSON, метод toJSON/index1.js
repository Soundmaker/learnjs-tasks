let user = {
  name: "Василий Иванович",
  age: 35,
};

let parseUser = JSON.parse(JSON.stringify(user));
console.log(parseUser); // { name: 'Василий Иванович', age: 35 }
