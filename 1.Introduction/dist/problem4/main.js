const daysOfWeek = (day) => {
    let weekDays;
    (function (weekDays) {
        weekDays[weekDays["Monday"] = 1] = "Monday";
        weekDays[weekDays["Tuesday"] = 2] = "Tuesday";
        weekDays[weekDays["Wednesday"] = 3] = "Wednesday";
        weekDays[weekDays["Thursday"] = 4] = "Thursday";
        weekDays[weekDays["Friday"] = 5] = "Friday";
        weekDays[weekDays["Saturday"] = 6] = "Saturday";
        weekDays[weekDays["Sunday"] = 7] = "Sunday";
    })(weekDays || (weekDays = {}));
    if (!weekDays[day]) {
        return 'error';
    }
    return weekDays[day];
};
console.log(daysOfWeek('Some'));
//# sourceMappingURL=main.js.map