import React from 'react';
import Image from 'next/image';

const News: React.FC = () => {
  return (
      <div className='h-screen bg-gradient-to-b from-transparent via-[#517891] to-[#2a3f4d]'>
        <div className='flex flex-col items-center justify-center h-full'>
            <h1 className='text-6xl font-bold text-center text-white drop-shadow-lg'>News</h1>
            <h2 className='text-3xl font-semibold text-center text-white drop-shadow-lg'>Coming Soon!</h2>
        </div>
      </div>
  );
}

export default News;