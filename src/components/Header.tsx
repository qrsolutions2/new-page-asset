import React from 'react';
import { QrCode } from 'lucide-react';
import { smoothScroll } from '../utils/smoothScroll';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const headerClass = "fixed top-0 left-0 right-0 z-50 bg-gray-800 bg-opacity-90";
  const linkClass = "text-white hover:text-blue-400 transition-colors duration-300";
  const buttonClass = "bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300";
  const longButtonClass = "bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300 w-full text-center mt-2";

  return (
    <header className={headerClass}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <QrCode className="h-8 w-8 text-blue-400 mr-2" />
          <Link to="/" className="text-xl font-bold text-white">QRSolutions</Link>
        </div>
        <nav>
          <ul className="flex items-center space-x-4">
            <li><a href="#sectors" onClick={smoothScroll} className={linkClass}>Sectors</a></li>
            <li><a href="#dashboard" onClick={smoothScroll} className={linkClass}>Dashboard</a></li>
            <li><a href="#extras" onClick={smoothScroll} className={linkClass}>Extras</a></li>
            <li><a href="#faq" onClick={smoothScroll} className={linkClass}>FAQ</a></li>
            <li className="flex flex-col items-end">
              <div className="flex space-x-2">
                <a href="#plans" onClick={smoothScroll} className={buttonClass}>
                  Sign Up
                </a>
                <button onClick={() => {/* Add login functionality later */}} className={buttonClass}>
                  Login
                </button>
              </div>
              <Link to="/asset-safety" className={longButtonClass}>
                Asset & Safety Management
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;