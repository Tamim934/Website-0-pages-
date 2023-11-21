import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Switcher from '../components/Switcher';
import Burger from '../components/Burger';
import Footer from '../components/Footer';
import DarkModeToggle from '../components/Darkmode';
import { IconButton} from '@mui/material';
import TranslateIcon from '@mui/icons-material/Translate';
import { useTranslation } from "react-i18next"

const Layout = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { pathname } = useLocation();
  const active= localStorage.getItem("i18nextLng");

  const {t, i18n } = useTranslation()

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
  }

  return (
    <div>
      {/* <header className='flex items-center justify-around'>
        <img className=' z-10' src="/src/assets/logo.png" alt="Logo" />
     
          <Burger />
      
          <nav className='flex justify-between w-[40%] items-center text-[20px] z-10'>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Services">Services</Link>
            <Link to="/Gallery">Gallery</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/Story">Story</Link>
            <Link to="/Careers">Careers</Link>
            <Link to="/News">News</Link>
            <IconButton ><TranslateIcon></TranslateIcon><span style={{color :active == "en" ?"red":""}} onClick={() => changeLanguage("en") } className='text-[gray]'  >en</span></IconButton>
            <IconButton><TranslateIcon></TranslateIcon><span style={{color: active =="ru"?"Red":""}} onClick={() => changeLanguage("ru")} className='text-[gray]' >ru</span></IconButton>
          </nav>
     
        <div className='flex items-center'>
          <DarkModeToggle/>
        </div>
      </header> */}
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;



