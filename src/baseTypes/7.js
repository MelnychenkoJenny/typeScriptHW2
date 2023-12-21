/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
var Week;
(function (Week) {
    Week["Monday"] = "monday";
    Week["Tuesday"] = "tuesday";
    Week["Wednesday"] = "wednesday";
    Week["Thursday"] = "thursday";
    Week["Friday"] = "friday";
    Week["Saturday"] = "saturday";
    Week["Sunday"] = "sunday";
})(Week || (Week = {}));
function isWeekend(dayOfWeek) {
    if (dayOfWeek.toLowerCase() === Week.Saturday || dayOfWeek.toLowerCase() === Week.Sunday) {
        return true;
    }
    return false;
}
console.info(isWeekend('Saturday'));
