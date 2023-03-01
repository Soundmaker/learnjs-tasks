function getLocalDay(date) {
  let dayOfWeek = date.getDay();

  if (dayOfWeek === 0) {
    dayOfWeek = 7;
  }

  return dayOfWeek;
}

let date = new Date(2012, 0, 8); // воскресенье
console.log(getLocalDay(date)); // 7
