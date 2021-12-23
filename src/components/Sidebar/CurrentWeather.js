import React from 'react';
import { useMainContext } from '../../context/MainContext';

function CurrentWeather() {
  const { weatherData } = useMainContext();
  // Country Name
  console.log('Gün:' + weatherData.hours);
  console.log('Sonuç:', weatherData);
  return (
    <div>
      <h2 className="text-center pt-3 text-2xl text-gray-700 font-semibold">
        {weatherData.location + ', ' + weatherData.country}{' '}
      </h2>
      <figure className="relative before:">
        <img
          className="w-full"
          src={require(`../../icons/${weatherData.iconId}.svg`)}
          alt={weatherData.description}
        />
        <figcaption className="absolute bottom-2 right-1/2 translate-x-1/2 capitalize italic">
          {weatherData.description}
        </figcaption>
      </figure>
      <div className="border border-gray-200 border-bottom w-1/2 my-3 mx-auto"></div>
      <div className="flex h-full flex-col justify-between">
        <div className="flex mb-3">
          <span className="text-7xl">
            <strong>{weatherData.temperature}</strong>
          </span>
          <span className="text-3xl">°</span>
          <span className="text-2xl">C</span>
        </div>
        <div className="flex items-end">
          <span className="text-3xl font-semibold pr-2">
            {weatherData.day},
          </span>
          <time className="text-gray-400">{weatherData.hours}</time>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
