import React from 'react';
import SubTitle from './SubTitle';

function SunriseSunset({ sunrise, sunset }) {
  return (
    <div>
      <div className="flex items-center">
        <figure>
          <img
            className="w-24 mr-3"
            src={require(`../../icons/sunrise.svg`)}
            alt="sunrise"
          />
        </figure>
        <span className="text-xl text-gray-600 font-semibold">{sunrise}</span>
      </div>
      <div className="flex items-center">
        <figure>
          <img
            className="w-24 mr-3"
            src={require(`../../icons/sunset.svg`)}
            alt="sunrise"
          />
        </figure>
        <span className="text-xl text-gray-600 font-semibold">{sunset}</span>
      </div>
    </div>
  );
}

export default SunriseSunset;
