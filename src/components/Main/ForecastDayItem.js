import React from 'react';

function ForecastDayItem({ temp, icon, day, hour }) {
  return (
    <li className="flex flex-col justify-center items-center bg-white rounded-xl py-2">
      <span className="font-semibold text-lg">{day}</span>
      <span className="text-xs text-gray-500">{hour}</span>
      <img
        className="w-2/3"
        src={require(`../../icons/${icon}.svg`)}
        alt={`icon-${icon}`}
      />
      <span className="text-lg text-gray-600">{temp}°</span>
    </li>
  );
}

export default ForecastDayItem;
