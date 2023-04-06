import { useSelector } from "react-redux"
import WeatherBox from "../weatherBox/weatherBox"
import { useEffect, useState } from "react"
import Carrousel from "../carrousel/carrousel"


const WeatherList = () => {

    const forecastList = useSelector((state) => state.search.forecastList)
    const week = useSelector((state) => state.search.week)
    const [firstDate, setFirstDate] = useState([])

    useEffect(() => {
        const today = new Date()
        let tab = []
        let ind
        if (today.getDay() < 6)
            ind = today.getDay() + 1
        else
            ind = 0

        for (let i = 0; i < 5; i++) {

            tab.push({
                id: ind,
                day: week[ind]
            })

            if (ind < 6)
                ind++
            else
                ind = 0

        }

        setFirstDate(tab)
    }, [])

    return (

        <section className="w-full p-8 md:px-28 text-white">
            <div className="p-4 bg-slate-500">

                {
                    firstDate?.map((val, i) =>
                        <div key={i} className="container">
                            <div className="text-center text-lg">
                                <h3 className="p-4 m-2 font-extrabold uppercase ">{val.day}</h3>
                            </div>
                            <div className="mb-12">
                                <Carrousel data={forecastList?.[val.id]} />
                            </div>
                        </div>
                    )
                }

            </div>

        </section>
    )
}

export default WeatherList