import { useSelector } from "react-redux"
import { get4xIconLink } from "../../utils/links"

const MainWeather = () => {

    const city = useSelector((state) => state.search.city)
    const currentWeather = useSelector((state) => state.search.currentWeather)


    return (
        <div className="w-full p-8 md:px-28 text-white">
            <div className="w-full p-8 bg-slate-500">
                <div className=" p-4 text-center text-4xl font-bold">
                    <h1 className="font-extrabold uppercase">{city}</h1>
                    <div className="m-4 flex justify-center place-items-center">
                        <div className="">
                            <div className="max-w-xs overflow-hidden rounded-lg shadow-lg bg-gray-900 text-gray-100">
                                <div className="flex justify-between p-4">
                                    <div className="flex flex-col flex-1 gap-4">
                                        <div className="flex justify-between">
                                            <div className="flex gap-2">
                                                <span className="text-5xl font-semibold">{currentWeather?.main?.temp_max.toFixed(0)} °</span>
                                                <span className="text-lg dark:text-gray-400">/ {currentWeather?.main?.temp_min.toFixed(0)}°</span>
                                            </div>
                                            <img className="w-20 h-20 " src={get4xIconLink(currentWeather?.weather[0]?.icon)} />
                                        </div>
                                        <div className="text-left">
                                            <p className="font-extrabold uppercase" >{currentWeather?.weather[0]?.description}</p>
                                            <p className="font-extrabold uppercase mb-2">  <span>{currentWeather?.main?.temp.toFixed(0)}°</span> </p>
                                            <p className="text-sm"> Heure : <span>{new Date((currentWeather?.dt) * 1000).toLocaleTimeString('fr-FR')}</span> </p>
                                            <p className="text-sm"> Ressentie : <span>{currentWeather?.main?.feels_like.toFixed(0)}°</span> </p>
                                            <p className="text-sm"> Humidité : <span>{currentWeather?.main?.humidity}</span> % </p>
                                            <p className="text-sm"> Lever du soleil  :  <span> {new Date((currentWeather?.sys?.sunrise) * 1000).toLocaleTimeString('fr-FR')}  </span> </p>
                                            <p className="text-sm"> coucher du soleil : <span> {new Date((currentWeather?.sys?.sunset) * 1000).toLocaleTimeString('fr-FR')}  </span>  </p>

                                        </div>
                                    </div>
                                    <div className="text-sm leading-loose">
                                        <div className="flex items-center"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default MainWeather