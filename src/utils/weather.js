export const getWeatherDescription = (code) => {
  const weatherCodes = {
    0: "맑음",
    1: "대체로 맑음",
    2: "부분적으로 흐림",
    3: "흐림",
    45: "안개",
    48: "짙은 안개",
    51: "약한 이슬비",
    53: "보통 이슬비",
    55: "강한 이슬비",
    61: "약한 비",
    63: "보통 비",
    65: "강한 비",
    71: "약한 눈",
    73: "보통 눈",
    75: "강한 눈",
  };
  return weatherCodes[code] || "알 수 없음";
};

export const formatHourlyData = (weatherData) => {
  if (!weatherData || !weatherData.hourly) return [];

  const { time, temperature_2m, weather_code } = weatherData.hourly;
  const now = new Date();
  const startIdx = time.findIndex(t => new Date(t) > now);

  let result = [];
  for (let i = startIdx; i < startIdx + 12; i++) {
    if (i >= time.length) break;
    result.push({
      time: `${new Date(time[i]).getHours()}시`,
      temp: Math.round(temperature_2m[i]),
      code: weather_code[i],
    });
  }
  return result;
};

export const formatDailyData = (weatherData) => {
  if (!weatherData || !weatherData.daily) return [];

  const { time, weather_code, temperature_2m_max } = weatherData.daily;
  return time.map((dateStr, idx) => {
    const dateObj = new Date(dateStr);
    const date = `${dateObj.getMonth() + 1}/${dateObj.getDate()} (${["일","월","화","수","목","금","토"][dateObj.getDay()]})`;
    return {
      date,
      code: weather_code[idx],
      temp: Math.round(temperature_2m_max[idx]),
    };
  });
};