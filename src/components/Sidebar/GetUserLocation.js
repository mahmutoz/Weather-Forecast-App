import React, { useState, useEffect } from 'react';
import { AiOutlineAim } from 'react-icons/ai';
import { useWeather } from '../../hooks/useWeather';
import { useMainContext } from '../../context/MainContext';
import { usePosition } from 'use-position';

function GetUserLocation() {
  const { search, setSearch } = useMainContext();
  const { latitude, longitude, error } = usePosition();

  const latLon = {
    lat: latitude,
    lon: longitude,
    isDenied: true,
  };

  useEffect(() => {
    if (error === null) latLon.isDenied = false;
  }, error);

  useWeather('forecast', search, latLon);
  return (
    <button className="bg-gray-200 p-2 rounded-full" title="Your Location">
      <AiOutlineAim />
    </button>
  );
}

export default GetUserLocation;
