import { useDispatch, useSelector } from "react-redux"
import Input from "./components/input/input"
import MainWeather from "./components/mainWeather/mainWeather"
import { reset } from "./store/slice/searchSlice"
import WeatherList from "./components/weatherList/weatherList"

const App = () => {

    const dispatch = useDispatch()
    const hasData = useSelector((state) => state.search.hasData)
    const loading = useSelector((state) => state.search.loading)
    const error = useSelector((state) => state.search.error)

    return (
        <main className="bg-slate-800 min-h-screen md:px-38 flex place-items-center" >

            {
                (!hasData && !loading) &&
                <div className="p-8 mx-auto text-center border-4 border-slate-500">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl text-white">
                        Prévisions Météorologiques
                    </h1>
                    <div className="grid grid-cols-12 gap-4">
                        <div className="m-8 col-span-12  md:col-start-4 md:col-span-6">
                            <Input />
                        </div>
                    </div>

                    {
                        error &&
                        <div className="w-full text-center">
                            <p className="text-xl italic text-rose-500">{error} </p>
                        </div>
                    }

                </div>
            }


            {
                (!hasData && loading) &&
                <div className="w-full">
                    <div className="flex justify-center items-center h-full">
                        <div className="flex items-center justify-center space-x-2">
                            <div className="w-16 h-16 rounded-full animate-pulse bg-white"></div>
                            <div className="w-16 h-16 rounded-full animate-pulse bg-white"></div>
                            <div className="w-16 h-16 rounded-full animate-pulse bg-white"></div>
                        </div>
                    </div>
                </div>
            }

            {
                (hasData && !loading) &&
                <div className="w-full">
                    <div className="w-full flex flex-col items-center mt-4">
                        <button
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 text-center"
                            onClick={(e) => dispatch(reset())} >
                            Nouvelle recherche
                        </button>
                    </div>
                    <MainWeather />
                    <WeatherList />
                </div>
            }

        </main>

    )
}

export default App