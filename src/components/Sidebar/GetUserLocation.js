import React from 'react';
import { AiOutlineAim } from 'react-icons/ai';
import { useMainContext } from '../../context/MainContext';

function GetUserLocation() {
  const { isLatLon, setIsLatLon } = useMainContext();

  return (
    <button
      onClick={() => setIsLatLon(!isLatLon)}
      className="bg-gray-200 p-2 rounded-full"
      title="Your Location"
    >
      <AiOutlineAim />
    </button>
  );
}

export default GetUserLocation;
