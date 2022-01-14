import axios from 'axios';
import { useEffect } from 'react';
import { useMainContext } from 'context/MainContext';
import { usePosition } from 'use-position';

const api = {
  base: process.env.REACT_APP_API_URL,
  key: process.env.REACT_APP_API_KEY,
};
const lang = navigator.language;

export function useWeather() {
  const { weatherData, setWeatherData, search, isLatLon, setLoading } =
    useMainContext();
  const { latitude, longitude, error } = usePosition();

  const latLon = {
    lat: latitude,
    lon: longitude,
  };

  useEffect(() => {
    if (error != null && latLon) {
      console.log('Erişim reddedildi!');
    } else {
      axios(
        `${api.base}/forecast?${
          error == null && isLatLon === false
            ? 'q=' + search
            : 'lat=' + latLon.lat + '&lon=' + latLon.lon
        }&units=metric&cnt=9&appid=${api.key}&lang=${lang}`
      ).then((result) => {
        if (result.status === 200) {
          console.log('All Data:', result);
          setWeatherData(getProperties(result.data));
          setLoading(true);
        } else {
          setLoading(false);
        }
      });
    }
  }, [search, error]);
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
    windSpeed: Math.round(weatherData.list[0].wind.speed * 3.6), // convert from m/s to km/h
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
