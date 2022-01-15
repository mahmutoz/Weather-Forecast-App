import React from 'react';
import { useMainContext } from '../../context/MainContext';
import Loading from './Loading';
import { BsCloudRainHeavy } from 'react-icons/bs';

function CurrentWeather() {
  const { weatherData, loading } = useMainContext();

  return loading ? (
    <div>
      <h2 className="text-center pt-3 text-2xl text-gray-700 font-semibold max-w-xs">
        {weatherData.location + ', ' + weatherData.country}{' '}
      </h2>
      <figure className="flex items-center justify-center">
        <img
          className="w-5/6"
          src={require(`../../icons/${weatherData.iconId}.svg`)}
          alt={weatherData.description}
        />
      </figure>
      <div className="flex h-full flex-col justify-center items-center">
        <div className="flex h-36 w-36 justify-center items-center mb-3 shadow-xl rounded-full p-6">
          <span className="text-6xl">
            <strong>{weatherData.temperature}</strong>
          </span>
          <span className="text-3xl pb-5">°</span>
          <span className="text-2xl pb-4">C</span>
        </div>
        <span className="text-gray-500 text-sm font-semibold mt-4">
          Feels Like: {weatherData.feelsLike}°
        </span>
        <div className="flex items-end mt-4">
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
        <div className="flex items-center">
          <figure>
            <img
              className="w-12 mr-1"
              src={require(`../../icons/rain-drops.svg`)}
              alt={weatherData.description}
            />
          </figure>
          <span className="capitalize pl-1">Rain - {weatherData.rain}%</span>
        </div>
        <div></div>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default CurrentWeather;
