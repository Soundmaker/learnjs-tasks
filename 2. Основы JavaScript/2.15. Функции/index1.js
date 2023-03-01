// Если age > 18, то вернет true, иначе вернет confirm('Родители разрешили?')
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm("Родители разрешили?");
  }
}

// Если age > 18, то вернет true, иначе вернет confirm('Родители разрешили?')
function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm("Родители разрешили?");
}

// Функции работают одинаково
