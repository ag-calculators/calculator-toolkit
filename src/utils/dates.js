export const  addDays = (dt, days) => {

    if (typeof dt === 'string') {
        dt = new Date(dt)
    }
    var newDate = new Date(dt)
    var nextDate = dt.getDate() + parseInt(days)
    newDate.setDate(nextDate);
    console.log(dt, nextDate, newDate)
    return newDate
}

export const inputDate = (date) => {
    let newDate = new Date(date)
    var dd = `0${newDate.getDate()}`.slice(-2)
    var mm = `0${newDate.getMonth() + 1}`.slice(-2)
    var y = newDate.getFullYear()

    return `${y}-${mm}-${dd}`
}


export const formatDate = (date, sep = "/") => {
    let newDate = new Date(date)

    var dd = newDate.getDate()
    var mm = newDate.getMonth() + 1
    var y = newDate.getFullYear()

    return `${mm}${sep}${dd}${sep}${y}`
}