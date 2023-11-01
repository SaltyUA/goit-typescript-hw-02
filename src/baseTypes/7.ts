/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum WeekDays {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wensday = "Wensday",
  Thuersday = "Thuersday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

function isWeekend(day: WeekDays): boolean {
  return day === WeekDays.Saturday || WeekDays.Sunday ? true : false;
}
