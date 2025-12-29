import { weather } from "../../config";
import {
  ANY_ERRORS,
  CITY,
  FORECAST_SUCCESS,
  PENDING,
  wEATHER_SUCCESS,
} from "../constants";

export const loading = () => ({
  type: PENDING,
});

export const weatherSeccess = (payload) => ({
  type: wEATHER_SUCCESS,
  payload,
});

export const forecastSuccess = (payload) => ({
  type: FORECAST_SUCCESS,
  payload,
});

export const anyErrors = () => ({
  type: ANY_ERRORS,
  payload: anyErrors,
});

export const setCity = (city) => ({
  type: CITY,
  payload: city,
});

export const fetchWeather = (city) => {
  return async (dispatch) => {
    dispatch(loading())
    try {
      const weatherResponse = await weather.get(
        `weather?q=${city}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`
      );
      const forecastResponse = await weather.get(
        `forecast?q=${city}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`
      );
      if (weatherResponse && forecastResponse) {
        dispatch(weatherSeccess(weatherResponse.data));
        dispatch(forecastSuccess(forecastResponse.data));
      }
    } catch (error) {}
  };
};
