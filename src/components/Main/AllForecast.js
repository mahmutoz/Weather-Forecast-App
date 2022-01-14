import React from 'react';
import { useMainContext } from '../../context/MainContext';
import ForecastDayItem from './ForecastDayItem';
import convertDate from '../../hooks/useWeather';

function AllForecast() {
  const { weatherData, loading, city } = useMainContext();
  console.log(weatherData?.list);
  return (
    <ul className="grid grid-cols-8 gap-2 mt-4">
      {weatherData?.list?.map((list, index) => (
        <ForecastDayItem
          key={index}
          temp={Math.round(list.main.temp)}
          icon={list.weather[0].icon}
          day={convertDate(list.dt)?.weakDay?.substring(0, 3)}
          hour={list.dt_txt.split(' ')[1].split(':').splice(0, 2).join(':')}
        />
      ))}
    </ul>
  );
}

export default AllForecast;