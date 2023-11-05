import React from 'react';

const Welcome: React.FC = () => {
    
    return (
        <div className='h-screen bg-gradient-to-b from-[#2a3f4d] via-[#517891] to-transparent'>
            <div className='flex flex-col items-center justify-center h-full'>
                <h1 className='text-6xl font-bold text-center text-white drop-shadow-lg'>Welcome to Goldman's MarketMind</h1>
                <h2 className='text-3xl font-semibold text-center text-white drop-shadow-lg'>A website to predict the future of the stock market powered by AI</h2>
            </div>
        </div>
  );
}

export default Welcome;

