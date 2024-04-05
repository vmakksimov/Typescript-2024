const daysOfWeek = (day: string): any => {
    enum weekDays {
        Monday = 1,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }
    if (!weekDays[day]){
        return 'error'
    }

    return weekDays[day];
}

console.log(daysOfWeek('Some'));