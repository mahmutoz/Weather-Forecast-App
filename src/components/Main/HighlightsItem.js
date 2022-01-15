import React from 'react';
import SunriseSunset from './SunriseSunset';
import { useMainContext } from '../../context/MainContext';
import SubTitle from './SubTitle';

function HighlightsItem({ subtitle, children }) {
  const { weatherData } = useMainContext();

  return (
    <div className="flex flex-col justify-center bg-gray-50 p-4 rounded-3xl mt-2">
      <SubTitle subtitle={subtitle} />
      {children}
    </div>
  );
}

export default HighlightsItem;
