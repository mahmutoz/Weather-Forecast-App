import React from 'react';

function Humidity({ humidity }) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <span className="text-6xl font-semibold">{humidity}</span>
          <span className="text-xl">%</span>
        </div>
        <figure>
          <img
            className="w-32"
            src={require(`../../icons/humidity.svg`)}
            alt="sunrise"
          />
        </figure>
      </div>
      <p className="text-xl font-semibold text-gray-600 pt-4">
        {humidity < 30
          ? 'Low 👎🏻'
          : humidity >= 30 && humidity < 60
          ? 'Normal 👌🏻'
          : 'High 👍🏻'}
      </p>
    </div>
  );
}

export default Humidity;
