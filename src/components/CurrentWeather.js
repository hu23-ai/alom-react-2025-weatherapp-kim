import React from "react";
import {
  CurrentWeatherWrapper,
  Temperature,
  WeatherCode,
} from "./styles/StyledComponents";
import { getWeatherDescription } from "../utils/weather";

const CurrentWeather = ({ weatherData, isLoading }) => {
  if (isLoading) {
    return <div>채워주세요</div>;
  }

  return (
    <CurrentWeatherWrapper>
      <Temperature>{weatherData.hourly.temperature_2m[0]}°C</Temperature>
      <WeatherCode>{getWeatherDescription(weatherData.hourly.weather_code[0])}</WeatherCode>
    </CurrentWeatherWrapper>
  );
};

export default CurrentWeather;
