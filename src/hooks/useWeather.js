import axios from 'axios';
import { useEffect } from 'react';
import { useMainContext } from 'context/MainContext';

const api = {
  base: process.env.REACT_APP_API_URL,
  key: process.env.REACT_APP_API_KEY,
};
const lang = navigator.language;

export function useWeather() {
  const { weatherData, setWeatherData, search, isLatLon, setLoading } =
    useMainContext();

  useEffect(() => {
    axios(
      `${api.base}/forecast?q=${search}&units=metric&cnt=9&appid=${api.key}&lang=${lang}`
    ).then((result) => {
      if (result.status === 200) {
        console.log('All Data:', result);
        setWeatherData(getProperties(result.data));
        setLoading(true);
      } else {
        setLoading(false);
      }
    });
  }, [search]);
}

function getProperties(weatherData) {
  const mappedData = {
    location: weatherData.city.name,
    condition: weatherData.cod,
    day: convertDate(weatherData.list[0].dt).weakDay,
    hours: weatherData.list[0].dt_txt
      .split(' ')[1]
      .split(':')
      .splice(0, 2)
      .join(':'),
    description: weatherData.list[0].weather[0].description,
    country: codeToNameConvert(weatherData.city.country),
    feelsLike: Math.round(weatherData.list[0].main.feels_like),
    humidity: weatherData.list[0].main.humidity,
    rain: Math.round(weatherData.list[8].pop * 100),
    iconId: weatherData.list[0].weather[0].icon,
    sunrise: convertDate(weatherData.city.sunrise).hours,
    sunset: convertDate(weatherData.city.sunset).hours,
    temperature: Math.round(weatherData.list[0].main.temp),
    timezone: weatherData.city.timezone / 3600, // convert from seconds to hours
    windSpeed: (weatherData.list[0].wind.speed * 3.6).toFixed(1), // convert from m/s to km/h
    windDeg: weatherData.list[0].wind.deg,
    list: weatherData.list.slice(1, 9),
  };

  /* TR => "Turkey" */
  function codeToNameConvert(countryCode) {
    const regionNames = new Intl.DisplayNames([`${lang}`], {
      type: 'region',
    });
    return regionNames.of(countryCode || 'TR');
  }
  return mappedData;
}

export default function convertDate(miliSeconds) {
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
