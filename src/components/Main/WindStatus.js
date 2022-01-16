import React from 'react';

function WindStatus({ windSpeed, windDeg }) {
  return (
    <div className="flex flex-col justify-around h-full">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-6xl font-bold text-sky-500">{windSpeed}</span>
          <span className="text-xs font-bold text-gray-500 dark:text-gray-300">
            Km/h
          </span>
        </div>
        <figure>
          <img
            className="w-32"
            src={require(`../../icons/windsock.svg`)}
            alt="wind sock"
          />
        </figure>
      </div>
      <div className="flex items-center text-xl font-semibold text-gray-600 dark:text-gray-200">
        <figure>
          <img
            className="w-16"
            style={{ transform: `rotate(${windDeg}deg)` }}
            src={require(`../../icons/compass.svg`)}
            alt="Direction"
          />
        </figure>
        <span>Direction</span>
      </div>
    </div>
  );
}

export default WindStatus;
