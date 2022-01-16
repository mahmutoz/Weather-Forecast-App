import React from 'react';

function SubTitle({ subtitle }) {
  return (
    <h3 className="text-xl font-semibold text-gray-400 dark:text-gray-300 mb-3">
      {subtitle}
    </h3>
  );
}

export default SubTitle;
