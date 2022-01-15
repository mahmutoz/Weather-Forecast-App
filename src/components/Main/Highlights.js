import React from 'react';
import SunriseSunset from './SunriseSunset';
import Title from './Title';
import Humidity from './Humidity';
import WindStatus from './WindStatus';
import Tempratures from './Tempratures';
import { useMainContext } from '../../context/MainContext';
import HighlightsItem from './HighlightsItem';

function Highlights() {
  const { weatherData } = useMainContext();
  return (
    <div className="mt-14">
      <Title title={"Today's Highlights"} />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <HighlightsItem subtitle="Tempratures">
          <Tempratures
            tempMax={weatherData.tempMax}
            tempMin={weatherData.tempMin}
          />
        </HighlightsItem>
        <HighlightsItem subtitle="Humidity">
          <Humidity humidity={weatherData.humidity} />
        </HighlightsItem>
        <HighlightsItem subtitle="Sunrise & Sunset">
          <SunriseSunset
            sunrise={weatherData.sunrise}
            sunset={weatherData.sunset}
          />
        </HighlightsItem>
        <HighlightsItem subtitle="Wind Status">
          <WindStatus
            windSpeed={weatherData.windSpeed}
            windDeg={weatherData.windDeg}
          />
        </HighlightsItem>
      </div>
    </div>
  );
}

export default Highlights;
