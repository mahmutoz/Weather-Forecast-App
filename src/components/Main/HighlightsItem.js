import React from 'react';
import SubTitle from './SubTitle';

function HighlightsItem({ subtitle, children }) {
  return (
    <div className="flex flex-col bg-white dark:bg-gray-900 p-4 rounded-3xl mt-2">
      <SubTitle subtitle={subtitle} />
      {children}
    </div>
  );
}

export default HighlightsItem;
