import { SEND_WEATHER_REQUEST } from "./weatherTypes";
import { all, call, fork, put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from "axios";
import { receiveWeatherError, receiveWeatherResponse } from "./weatherAction";

const getWeatherRequest = (query)=>{
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=7ebcd0b29f8e07a508956a38313b3ce0`)
}

function* handleGetWeather(action){
    try {
        const res = yield call(getWeatherRequest , action.payload)
        yield put(receiveWeatherResponse(res.data))
    } catch (error) {
        yield put(receiveWeatherError(error.message))
    }
}

export function* watcherSaga(){
    yield takeLatest(SEND_WEATHER_REQUEST , handleGetWeather)
}

function* handleGetWeather2(action){
    try {
        const res = yield call(getWeatherRequest , action.payload)
        yield put(receiveWeatherResponse(res.data))
    } catch (error) {
        yield put(receiveWeatherError(error.message))
    }
}

export function* watcherSaga2(){
    yield takeLatest(SEND_WEATHER_REQUEST , handleGetWeather2)
}

export function* rootSaga(){
    yield all([
        fork(watcherSaga),
        fork(watcherSaga2),
    ])
}