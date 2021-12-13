import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="w-screen h-16 bg-green-600 flex justify-around items-center pl-2">
      <h1 className="text-white font-bold text-4xl">Stream-it</h1>
      <div className="flex w-3/6 justify-around">
        <Link to="/main">
          <p className="text-white cursor-pointer">Movies</p>
        </Link>
        <Link to="/tvshows">
          <p className="text-white cursor-pointer">TV Shows</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
