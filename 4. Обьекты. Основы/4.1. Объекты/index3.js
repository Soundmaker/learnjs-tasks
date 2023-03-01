const user = {
  name: "John",
};

// это будет работать?
user.name = "Pete";

// Да, так как const означает не изменяемость состояния, а то, что переменная user не может изменить свою ссылку
console.log(user); // { name: "Pete" }
