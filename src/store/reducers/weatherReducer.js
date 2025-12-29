import {
  ANY_ERRORS,
  CITY,
  FORECAST_SUCCESS,
  PENDING,
  wEATHER_SUCCESS,
} from "../constants";

const initialState = {
  weather: null,
  forecast: null,
  loading: false,
  errors: null,
  city: "delhi",
};

export const weatherReducer = (state = initialState, action) => {
  if (action.type === PENDING) {
    return {
      ...state,
      loading: true,
    };
  } else if (action.type === wEATHER_SUCCESS) {
    return {
      ...state,
      weather: action.payload,
      loading: false,
    };
  } else if (action.type === FORECAST_SUCCESS) {
    return {
      ...state,
      forecast: action.payload,
      loading: false,
    };
  } else if (action.type === ANY_ERRORS) {
    return {
      ...state,
      errors: action.payload,
    };
  } else if (action.type === CITY) {
    return {
      ...state,
      city: action.payload,
    };
  } else {
    return state;
  }
};
