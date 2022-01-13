import React from 'react';

function Loading() {
  return (
    <div class="relative flex justify-center items-center h-3/4">
      <div class="rounded animate-spin ease duration-300 w-10 h-10 border-2 border-indigo-500"></div>
    </div>
  );
}

export default Loading;
