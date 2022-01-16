import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { BsFillMoonStarsFill, BsSun } from 'react-icons/bs';
import { useMainContext } from '../../context/MainContext';

function Info() {
  const { isDark, setIsDark } = useMainContext();

  return (
    <div className="flex justify-end items-center">
      <button
        onClick={() => setIsDark(isDark === '' ? 'dark' : '')}
        className="group mr-3 dark:bg-gray-600 border border-gray-300 hover:border-gray-400 p-0.5 dark:border-gray-900 dark:hover:border-gray-500 rounded-full transition-all"
      >
        {isDark ? (
          <figure>
            <img
              className="w-8 dark:bg-gray-600 rounded-full"
              src={require(`../../icons/01d.svg`)}
              alt="sunrise"
            />
          </figure>
        ) : (
          <figure>
            <img
              className="w-9"
              src={require(`../../icons/01n.svg`)}
              alt="sunrise"
            />
          </figure>
        )}
      </button>
      <a
        className="mr-5"
        href="https://github.com/mahmutoz/Weather-Forecast-App"
        target="_blank"
        rel="noopener noreferrer"
        title="Repository"
      >
        <AiFillGithub
          size={30}
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
        />
      </a>
      <a href="https://mahmutoz.com/" target="_blank" rel="noopener noreferrer">
        <figure className="w-14 h-14">
          <img
            className="rounded-xl border-2 border-gray-50"
            src="https://avatars.githubusercontent.com/u/49031200?v=4"
            alt="Mahmut ÖZ"
          />
        </figure>
      </a>
    </div>
  );
}

export default Info;
