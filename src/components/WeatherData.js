import React from 'react';

export default function WeatherData({ list }) {
  return (
    <>
    <p>Here is the list of the current 5 day forecast</p>
      {list.map((item) => (
        <div key={item.dt} className='weather-card'>
          <p>Current Temperature is:{item.main.temp}</p>
          <p>Humidity: {item.main.humidity}</p>
          <p>Lowest Temperature:{item.main.temp_min}</p>
          <p>Highest Temperature: {item.main.temp_max}</p>
        </div>
      ))}
    </>
  )
}