import React from "react";
import { DailyForecastWrapper, DailyItem } from "./styles/StyledComponents";
import { getWeatherDescription, formatDailyData } from "../utils/weather";

const DailyForecast = ({ weatherData }) => {
  const Data = formatDailyData(weatherData);

return (
    <DailyForecastWrapper>
      {Data.map((item, idx) => (
        <DailyItem key={idx}>
          <div>{item.date}</div>
          <div>{getWeatherDescription(item.code)}</div>
          <div>{item.temp}°</div>
        </DailyItem>
      ))}
    </DailyForecastWrapper>
  );
};

export default DailyForecast;
