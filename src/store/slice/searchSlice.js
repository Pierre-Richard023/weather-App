import {
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit'
import {
    getWeather
} from '../../services/search'

export const getWeathersInCity = createAsyncThunk('search/getWeathersInCity', (city) => {
    return getWeather(city)
})

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        city: "",
        week: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
        error: "",
        currentWeather: {},
        forecastList: [
            [],
            [],
            [],
            [],
            [],
            [],
            []
        ],
        hasData: false,
        loading: false
    },
    reducers: {
        saveCity: (state, action) => {
            state.city = action.payload
        },
        reset: (state) => {
            state.city = ""
            state.placeholder = "Entrer une ville"
            state.currentWeather = {}
            state.hasData = false
            state.forecastList = [
                [],
                [],
                [],
                [],
                [],
                [],
                []
            ]

        },
    },
    extraReducers: (builder) => {


        builder.addCase(getWeathersInCity.pending, (state, action) => {
            state.loading = true
        })

        builder.addCase(getWeathersInCity.fulfilled, (state, action) => {

            if (action.payload.forecastList.length > 0) {
                state.loading = false
                state.hasData = true
                state.forecastList = action.payload.forecastList
                state.currentWeather = action.payload.currentWeather
            }else{
                state.loading = false
                state.error=`La ville \" ${state.city} \" n'a pas été trouvée !`
            }
        })

    }
})


export const {
    saveCity,
    reset,
} = searchSlice.actions

export default searchSlice.reducer