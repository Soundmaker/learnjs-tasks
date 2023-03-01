function getWeekDay(date) {
  let daysOfWeek = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];

  return daysOfWeek[date.getDay()];
}

let date = new Date(2012, 0, 3);
console.log(getWeekDay(date)); // "ВТ"
