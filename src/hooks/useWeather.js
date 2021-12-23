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
      date: convertDate(weatherData.data.dt),
      description: weatherData.data.weather[0].description,
      country: codeToNameConvert(weatherData.data.sys.country),
      feelsLike: Math.round(weatherData.data.main.feels_like),
      humidity: weatherData.data.main.humidity,
      iconId: weatherData.data.weather[0].icon,
      sunrise: weatherData.data.sys.sunrise,
      sunset: weatherData.data.sys.sunset,
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

    function convertDate(seconds) {
      const date = new Date();
      // Time format
      let day = Math.floor(seconds / (3600 * 24));
      let hour = Math.floor((seconds % (3600 * 24)) / 3600);
      let min = Math.floor((seconds % 3600) / 60);
      let sec = Math.floor(seconds % 60);
      return date.setUTCDate(day);
    }
    return mappedData;
  }
}
