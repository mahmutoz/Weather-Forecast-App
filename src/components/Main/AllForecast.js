import React from 'react';
import { useMainContext } from '../../context/MainContext';

function AllForecast() {
  const { weatherData, loading, city } = useMainContext();
  const arr2 = [1];
  // weatherData.listDays.map((list) => console.log(list));
  return (
    <div>
      {arr2.map((list) => (
        <span>{list}</span>
      ))}
      {weatherData.listDays}
    </div>
  );
}

export default AllForecast;
