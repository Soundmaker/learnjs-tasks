function getAverageAge(users) {
  const ageSum = users.reduce((sum, user) => sum + user.age, 0);

  return ageSum / users.length;
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [vasya, petya, masha];

console.log(getAverageAge(arr)); // 28
