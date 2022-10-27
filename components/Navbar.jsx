import { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import { Router } from 'next/router';
import { useTheme } from 'next-themes';
import Image from 'next/image';

import images from '../assets';

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="flexBetween w-full fixed z-10 p-4
    flex-row border-b dark:bg-nft-dark bg-white dark:border-nft-dark-1 border-nft-gray-1"
    >
      <div>
        <Link href="/">
          <div className="flexCenter md:hidden cursor-pointer" onClick={() => {}}>
            <Image src={images.logo02} objectFit="contain" width={32} height={32} alt="logo" />
            <p className="dark:text-white text-nft-black-1 font-semibold text-lg ml-1">CryptoMania</p>
          </div>
        </Link>
        <Link href="/">
          <div className="hidden md:flex cursor-pointer" onClick={() => {}}>
            <Image src={images.logo02} objectFit="contain" width={32} height={32} alt="logo" />
          </div>
        </Link>
      </div>
      <div className="flex flex-initial flex-row justify-end">
        <div className="flex items-center mr-2">
          <input
            type="checkbox"
            id="checkbox"
            className="checkbox"
            onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          />
          <label htmlFor="checkbox" className="flexBetween w-8 h-4 bg-black rounded-2xl p-1 label relative">
            <i className="fa fa-sun" />
            <i className="fa fa-moon" />
            <div className="bg-white w-3 h-3 absolute rounded-full ball" />
          </label>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
