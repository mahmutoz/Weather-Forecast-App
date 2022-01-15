import React from 'react';

function WindStatus({ windSpeed, windDeg }) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <span className="text-6xl font-bold">{windSpeed}</span>
          <span className="text-sm font-bold">Km/h</span>
        </div>
        <figure>
          <img
            className="w-32"
            src={require(`../../icons/windsock.svg`)}
            alt="wind sock"
          />
        </figure>
      </div>
      <div className="flex items-center text-xl font-semibold text-gray-600">
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
