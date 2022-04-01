import React from 'react';
import { useMainContext } from '../../context/MainContext';
import Loading from './Loading';

function CurrentWeather() {
  const { weatherData, loading, isCelcius } = useMainContext();

  return loading ? (
    <div>
      <h2 className="weather-title">
        {weatherData.location + ', ' + weatherData.country}{' '}
      </h2>
      <figure className="flex items-center justify-center">
        <img
          className="w-5/6"
          src={require(`../../icons/${weatherData.iconId}.svg`)}
          alt={weatherData.description}
        />
      </figure>
      <div className="weather-body">
        <div className="weather-inner">
          <span className="text-6xl text-sky-500">
            <strong>{weatherData.temperature}</strong>
          </span>
          <span className="text-3xl pb-5 text-gray-400 dark:text-gray-200">
            °
          </span>
          <span className="text-2xl pb-4 text-gray-400 dark:text-gray-200">
            {isCelcius === 'metric' ? 'C' : 'F'}
          </span>
        </div>
        <span className="text-gray-500 dark:text-gray-200 text-sm font-semibold mt-4">
          Feels Like: {weatherData.feelsLike}°
        </span>
        <div className="flex items-end mt-4">
          <span className="text-3xl text-sky-500 font-semibold pr-2">
            {weatherData.day},
          </span>
          <time className="text-gray-400 dark:text-gray-200">
            {weatherData.hours}
          </time>
        </div>
      </div>
      <div className="border-b border-gray-200 dark:border-gray-600 border-bottom w-full my-8 mx-auto"></div>
      <div>
        <div className="flex items-center">
          <img
            src={`${process.env.REACT_APP_ICON_URL}${weatherData.iconId}.png`}
            alt={weatherData.description}
          />
          <span className="capitalize pl-1 dark:text-gray-200">
            {weatherData.description}
          </span>
        </div>
        <div className="flex items-center">
          <figure>
            <img
              className="w-12 mr-1"
              src={require(`../../icons/rain-drops.svg`)}
              alt={weatherData.description}
            />
          </figure>
          <span className="capitalize pl-1 dark:text-gray-200">
            Rain - {weatherData.rain}%
          </span>
        </div>
        <div></div>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default CurrentWeather;
