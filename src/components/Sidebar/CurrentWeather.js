import React from 'react';
import { useMainContext } from '../../context/MainContext';

function CurrentWeather() {
  const { weatherData } = useMainContext();
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
      <div className="flex h-full flex-col justify-between mt-5">
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
      <div className="border-b border-gray-200 border-bottom w-full my-8 mx-auto"></div>
      <div>
        <div className="flex items-center">
          <img
            src={`${process.env.REACT_APP_ICON_URL}${weatherData.iconId}.png`}
            alt={weatherData.description}
          />
          <span className="capitalize pl-1">{weatherData.description}</span>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default CurrentWeather;
