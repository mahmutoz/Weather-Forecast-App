import axios from 'axios';
import { useEffect } from 'react';
import { useMainContext } from 'context/MainContext';

const api = {
  base: process.env.REACT_APP_API_URL,
  key: process.env.REACT_APP_API_KEY,
};

export function useWeather(endpoint, city, latLon) {
  const { weatherData, setWeatherData, search } = useMainContext();
  const lang = navigator.language;

  useEffect(() => {
    axios(
      `${api.base}/${endpoint}?${
        latLon.isDenied === false
          ? 'q=' + city
          : 'lat=' + latLon.lat + '&lon=' + latLon.lon
      }&units=metric&cnt=7&appid=${api.key}&lang=${lang}`
    ).then((result) => {
      if (result.status === 200) {
        setWeatherData(result);
        setWeatherData(getProperties(result.data));
        console.log('All Data:', result);
      }
    });
  }, [search]);

  console.log('Weather data:', weatherData);
  function getProperties(weatherData) {
    const mappedData = {
      location: weatherData.city.name,
      condition: weatherData.cod,
      day: convertDate(weatherData.list[0].dt).weakDay,
      hours: convertDate(weatherData.list[0].dt).hours,
      description: weatherData.list[0].weather[0].description,
      country: codeToNameConvert(weatherData.city.country),
      feelsLike: Math.round(weatherData.list[0].main.feels_like),
      humidity: weatherData.list[0].main.humidity,
      iconId: weatherData.list[0].weather[0].icon,
      sunrise: convertDate(weatherData.city.sunrise).hours,
      sunset: convertDate(weatherData.city.sunset).hours,
      temperature: Math.round(weatherData.list[0].main.temp),
      timezone: weatherData.city.timezone / 3600, // convert from seconds to hours
      windSpeed: Math.round(weatherData.list[0].wind.speed * 3.6), // convert from m/s to km/h
      list: weatherData.list,
    };

    /* TR => "Turkey" */
    function codeToNameConvert(countryCode) {
      const regionNames = new Intl.DisplayNames([`${lang}`], {
        type: 'region',
      });
      return regionNames.of(countryCode || 'TR');
    }

    function convertDate(miliSeconds) {
      const date = new Date(miliSeconds * 1000); // Epoch -> 1 January 1970
      // Time format

      const day = new Intl.DateTimeFormat(`${lang}`, {
        weekday: 'long',
      }).format(date);
      const hoursAndMin = new Intl.DateTimeFormat(`${lang}`, {
        hour: 'numeric',
        minute: 'numeric',
      }).format(date);

      return { weakDay: day, hours: hoursAndMin };
    }
    return mappedData;
  }
}
