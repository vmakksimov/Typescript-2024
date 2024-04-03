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
    if (weekDays[day]=== undefined){
        return 'error'
    }

    return weekDays[day]
}

console.log(daysOfWeek('Friday'));