import dayjs from "dayjs"


export function monthDayYear(date){
    var months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ]
    let day = dayjs(date).format("YYYY-MM-DD")
    let string = `${months[dayjs(day).month()]} ${dayjs(day).date()}, ${dayjs(day).year()}`
    return string
}