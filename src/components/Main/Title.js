import React from 'react';

function Title({ title }) {
  return (
    <h2 className="inline-block text-2xl text-gray-800 font-semibold">
      {title}
    </h2>
  );
}

export default Title;
