import React from 'react';

function Humidity({ humidity }) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <span className="text-6xl font-semibold text-sky-500">
            {humidity}
          </span>
          <span className="text-md font-semibold text-gray-500 dark:text-gray-300">
            %
          </span>
        </div>
        <figure>
          <img
            className="w-32"
            src={require(`../../icons/humidity.svg`)}
            alt="sunrise"
          />
        </figure>
      </div>
      <p className="text-xl font-semibold text-gray-600 dark:text-gray-200 pt-2">
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
