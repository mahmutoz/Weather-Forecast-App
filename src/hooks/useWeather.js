import axios from 'axios';
import { useEffect } from 'react';
import { useMainContext } from 'context/MainContext';

const api = {
  base: process.env.REACT_APP_API_URL,
  key: process.env.REACT_APP_API_KEY,
};

export function useWeather(city) {
  const { weatherData, setWeatherData, search } = useMainContext();

  useEffect(() => {
    axios(`${api.base}${city}&units=metric&appid=${api.key}`).then((result) => {
      if (result.status === 200) {
        setWeatherData(result);
        setWeatherData(getProperties(result));
        console.log('All Data:', result);
      }
    });
  }, [search]);

  console.log('Weather data:', weatherData);
  function getProperties(weatherData) {
    const mappedData = {
      location: weatherData.data.name,
      condition: weatherData.data.cod,
      day: convertDate(weatherData.data.dt).weakDay,
      hours: convertDate(weatherData.data.dt).hours,
      description: weatherData.data.weather[0].description,
      country: codeToNameConvert(weatherData.data.sys.country),
      feelsLike: Math.round(weatherData.data.main.feels_like),
      humidity: weatherData.data.main.humidity,
      iconId: weatherData.data.weather[0].icon,
      sunrise: convertDate(weatherData.data.sys.sunrise).hours,
      sunset: convertDate(weatherData.data.sys.sunset).hours,
      temperature: Math.round(weatherData.data.main.temp),
      timezone: weatherData.data.timezone / 3600, // convert from seconds to hours
      windSpeed: Math.round(weatherData.data.wind.speed * 3.6), // convert from m/s to km/h
    };

    /* TR => "Turkey" */
    function codeToNameConvert(countryCode) {
      const regionNames = new Intl.DisplayNames(['en'], {
        type: 'region',
      });
      return regionNames.of(countryCode || 'TR');
    }

    function convertDate(miliSeconds) {
      const date = new Date(miliSeconds * 1000); // Epoch -> 1 January 1970
      // Time format

      const day = new Intl.DateTimeFormat('en-US', {
        weekday: 'long',
      }).format(date);
      const hoursAndMin = new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: 'numeric',
      }).format(date);

      return { weakDay: day, hours: hoursAndMin };
    }
    return mappedData;
  }
}
