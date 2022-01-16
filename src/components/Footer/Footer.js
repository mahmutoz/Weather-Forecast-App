import React from 'react';

function Footer() {
  return (
    <footer className="pt-5 text-gray-700 dark:text-white font-semibold ">
      <span>Open Source by </span>
      <a
        className="text-sky-600 hover:text-sky-500 dark:text-sky-400 dark:hover:text-sky-300"
        href="https://mahmutoz.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Mahmut ÖZ
      </a>
      <span> © 2021 - Now</span>
    </footer>
  );
}

export default Footer;
