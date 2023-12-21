/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Week {
  Monday = 'monday',
  Tuesday = 'tuesday',
  Wednesday = 'wednesday',
  Thursday = 'thursday',
  Friday = 'friday',
  Saturday = 'saturday',
  Sunday = 'sunday',
}

function isWeekend(dayOfWeek: string): boolean {
  if(dayOfWeek.toLowerCase() === Week.Saturday || dayOfWeek.toLowerCase() === Week.Sunday) {
    return true;
  }
  return false;
}

console.info(isWeekend('Saturday'))