let btnnav = document.getElementById("btn-nav")
let ul = document.querySelector(".menu")
btnnav.addEventListener("click", () => ul.classList.toggle("d-block"))
let location1 = document.querySelector(".location")
let day = document.querySelector(".day")
let date = document.querySelector(".date")
let search = document.getElementById("search")
let num = document.querySelector(".num1")
let one = document.querySelector(".one")
let two = document.querySelector(".two")
let three = document.querySelector(".three")
let custom = document.querySelector(".custom")
let forecastIcon = document.querySelector(".forecast-icon img")
let forecastIcon1 = document.querySelector(".forecast-icon1 img")
let forecastIcon2 = document.querySelector(".forecast-icon2 img")
let degreeMax1 = document.querySelector(".degreeMax1")
let degreeMin1 = document.querySelector(".degreeMin1")
let custom1 = document.querySelector(".custom1")
let degreeMax2 = document.querySelector(".degreeMax2")
let degreeMin2 = document.querySelector(".degreeMin2")
let custom2 = document.querySelector(".custom2")
let day5 = document.querySelector(".day1")
let cuntry = document.querySelector(".cuntry")
let day6 = document.querySelector(".day2")

async function country(cant) {
    let search2 = await fetch(`https://api.weatherapi.com/v1/search.json?key=2f5c886631a24260a8103046232002&q=${cant}`)
    let search5 = await search2.json()
    let name = await search5[0].name
    await getData(name)
}

search.addEventListener("input", function () {
    let searchValue = search.value
    if (searchValue.length <= 2) {

    } else { country(`${searchValue}`) }


})
async function getData(name) {
    let name1 = name.split(" ")
    let data = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=2f5c886631a24260a8103046232002&q=${name1[0]}&q=&07112&days=7`)
    let dataJson = await data.json()
    location1.textContent = dataJson.location.name
    one.textContent = dataJson.current.wind_kph + "%"
    two.textContent = dataJson.current.vis_km + "Km/s"
    three.textContent = dataJson.current.wind_dir
    custom.textContent = dataJson.current.condition.text
    cuntry.textContent = dataJson.location.country
    forecastIcon.setAttribute("src", `https:${dataJson.current.condition.icon}`)
    num.textContent = dataJson.current.temp_c
    let day1 = dataJson.forecast.forecastday[1].day
    forecastIcon1.setAttribute("src", `https:${day1.condition.icon}`)
    degreeMax1.textContent = day1.maxtemp_c
    degreeMin1.textContent = day1.mintemp_c
    custom1.textContent = day1.condition.text
    let day2 = dataJson.forecast.forecastday[2].day
    forecastIcon2.setAttribute("src", `https:${day2.condition.icon}`)
    degreeMax2.textContent = day2.maxtemp_c
    degreeMin2.textContent = day2.mintemp_c
    custom2.textContent = day2.condition.text
    await dateTostrng(dataJson.forecast.forecastday[0].date)
    day.textContent = dataconter[0]
    date.textContent = `${dataconter[2]} ${dataconter[1]}`
    await dateTostrng(dataJson.forecast.forecastday[1].date)
    day5.textContent = dataconter[0]
    await dateTostrng(dataJson.forecast.forecastday[2].date)
    day6.textContent = dataconter[0]
}
getData("cairo")
function dateTostrng(params) {
    let data = new Date(params)
    dataconter = data.toDateString().split(" ")
    switch (dataconter[0]) {
        case "Sat":
            dataconter[0] = "Saturday";
            break;
        case "Sun":
            dataconter[0] = "Sunday";
            break;
        case "Mon":
            dataconter[0] = "Monday";
            break;
        case "Wed":
            dataconter[0] = "Wednesday";
            break;
        case "Thu":
            dataconter[0] = "Thursday";
            break;
        case "Fri":
            dataconter[0] = "Friday";
            break;
        case "Tue":
            dataconter[0] = "Tuesday";
    }
    switch (dataconter[1]) {
        case "Jan":
            dataconter[1] = "January";
            break;
        case "Feb":
            dataconter[1] = "February";
            break;
        case "Mar":
            dataconter[1] = "March";
            break;
        case "Apr":
            dataconter[1] = "April";
            break;
        case "May":
            dataconter[1] = "May";
            break;
        case "Jun":
            dataconter[1] = "June";
            break;
        case "Jul":
            dataconter[1] = "July";
            break;
        case "Aug":
            dataconter[1] = "August";
            break;
        case "Sep":
            dataconter[1] = "September";
            break;
        case "Oct":
            dataconter[1] = "October";
            break;
        case "Nov":
            dataconter[1] = "November";
            break;
        case "Dec":
            dataconter[1] = "December";
            break;
    }
}


