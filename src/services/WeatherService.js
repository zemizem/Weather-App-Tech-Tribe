import axios from 'axios';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export async function getWeatherData(city){
  return await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=imperial`);
}

