import {
    API_KEY
} from "../config/config"

export const getWeather = async (city) => {

    const coord = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`)
        .then(response => response.json())

    if (coord.length === 0)
        return {
            currentWeather: [],
            forecastList: [],
        }

    const lat = coord[0].lat
    const lon = coord[0].lon


    const forecastList = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&lang=fr&appid=${API_KEY}`)
        .then(response => response.json())
        .then((res) => {
            const data = res.list

            let tab = [
                [],
                [],
                [],
                [],
                [],
                [],
                []
            ]
            let day

            for (let d of data) {
                day = new Date(d.dt_txt)
                tab[day.getDay()].push(d)
            }

            return tab

        })

    const currentWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=fr&appid=${API_KEY}`)
        .then(response => response.json())


    return {
        currentWeather: currentWeather,
        forecastList: forecastList,
    }
}