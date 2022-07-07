let month = document.getElementById("month")
let day = document.getElementById("day")
let year = document.getElementById("year")

const assignDate = () => {
    let date = new Date()
    year.innerHTML = date.getFullYear()
    day = date.getDay()
    month = date.getMonth()
    console.log(day)
    console.log(month)

    if(month === 0){
        month.innerHTML = "January"
    } else if (month === 1){
        month.innerHTML = "February"
    } else if(month === 6){
        month.innerHTML = "July"
    }

    if(day === 4){
        day.innerHTML = "Thursday"
    }
    
}

assignDate()


