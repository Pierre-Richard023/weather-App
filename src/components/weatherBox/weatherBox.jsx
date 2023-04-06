import { get2xIconLink } from "../../utils/links"

const WeatherBox = ({ data }) => {

    const date = new Date(data?.dt_txt)

    return (
        <div className=" flex flex-col items-center p-8 m-2 rounded-md sm:px-12  bg-sky-900">
            <div className="text-center">
                <h2 className="text-xl font-semibold">
                    {date?.toLocaleTimeString('fr-FR')}
                </h2>
                <p className="text-sm text-white">
                    {date?.toLocaleDateString("fr-FR",
                        {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        }
                    )}
                </p>
            </div>
            <div className="">
                <img src={get2xIconLink(data?.weather[0]?.icon)} />
            </div>

            <div className="mb-2 text-3xl font-semibold">
                {data?.main?.temp.toFixed(0)}°
            </div>
            <p className="text-white">
                {data?.weather[0]?.description}
            </p>
        </div>


    )
}


export default WeatherBox