import React from "react";
import { HourlyForecastWrapper, HourlyItem } from "./styles/StyledComponents";
import { getWeatherDescription, formatHourlyData } from "../utils/weather";

const HourlyForecast = ({ weatherData }) => {
  const hourlyData = formatHourlyData(weatherData);

  return (
    <HourlyForecastWrapper>
      {hourlyData.map((item, idx) => (
        <HourlyItem key={idx}>
          <div>{item.time}</div>
          <div>{item.temp}°</div>
          <div>{getWeatherDescription(item.code)}</div>
        </HourlyItem>
      ))}
    </HourlyForecastWrapper>
  );
};

export default HourlyForecast;
