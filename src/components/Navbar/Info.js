import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

function Info() {
  return (
    <div className="flex justify-end items-center">
      <a
        className="mr-5"
        href="https://github.com/mahmutoz/Weather-Forecast-App"
        target="_blank"
        title="Repository"
      >
        <AiFillGithub
          size={30}
          className="text-gray-500 hover:text-gray-800 transition-colors"
        />
      </a>
      <a href="https://mahmutoz.com/" target="_blank">
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
