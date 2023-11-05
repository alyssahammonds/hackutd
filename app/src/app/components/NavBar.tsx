import React from 'react';
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
      <nav className='flex items-center pl-2'>
          <Image src={'/logo.png'} width={100} height={150} alt='logo'/>
          <div className='text-2xl pl-7 flex items-center space-x-7'>
                <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"><a>Home</a></button>
                <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"><a>Market Performance</a></button>
                <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"><a>Portfolio</a></button>
                <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"><a>News</a></button>
            </div>
    </nav>
  );
}

export default Navbar;