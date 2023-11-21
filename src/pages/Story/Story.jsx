import React from 'react'
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, Outlet, useLocation } from "react-router-dom";
import Burger from "../../components/Burger";
import { IconButton } from "@mui/material";
import TranslateIcon from '@mui/icons-material/Translate';
import DarkModeToggle from "../../components/Darkmode";
import Footer from "../../components/Footer";
import { useDropzone } from 'react-dropzone';

const Story = () => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*', 
    onDrop: async (acceptedFiles) => {
      let file = await fileToBase64(acceptedFiles[0]);
      setImage(file);
    }
  });
  const { getRootProps: getRootPropsEdit, getInputProps: getInputPropsEdit } = useDropzone({
    accept: 'image/*', 
    onDrop: async (acceptedFiles) => {
      let file = await fileToBase64(acceptedFiles[0]);
      setImageEdit(file);
    }
  });
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
      <div className='all h-[70vh]'>
<header className='flex items-center justify-around h-[10vh]'>
        <img className=' z-10 max5:w-[50px]' src="/src/assets/logo.png" alt="Logo" />
     <div className=" max4:flex hidden">
          <Burger />
      </div>
          <nav className='flex justify-between w-[50%] items-center text-[20px] z-10 max2:text-[15px] max3:w-[60%] max3:text-[12px] max4:hidden'>
          <Link className="text-white max3:" to="/">{t('Home')}</Link>
      <Link className="text-white max3:" to="/About">{t('About')}</Link>
      <Link className="text-white max3:" to="/Services">{t('Services')}</Link>
      <Link className="text-white max3:" to="/Gallery">{t('Gallery')}</Link>
      <Link className="text-white max3:" to="/Contact">{t('Contact')}</Link>
      <Link className="text-white max3:" to="/Story">{t('Story')}</Link>
      <Link className="text-white max3:" to="/Careers">{t('Careers')}</Link>
      <Link className="text-white max3:hidden" to="/News">{t('News')}</Link>
      <Link className="text-white max3:hidden" to="/Save">{t('Save')}</Link>
      <Link className="text-white max3:hidden" to="/games">{t('Game')}</Link>
      <select value={i18n.language} className=" bg-transparent text-white" onChange={(e) => changeLanguage(e.target.value)}>
              <option value="en" className='text-black'>EN</option>
              <option value="ru" className='text-black'>RU</option>
            </select>
    </nav>
         
     
        <div className='flex items-center max4:hidden'>
          <DarkModeToggle/>
        </div>
      </header> 
      <div className='text-center'>
        <h1 className='text-white text-[64px] mt-[140px] font-bold max3:text-[43px] max4:text-[30px]'>Process details : Build villa two floors</h1>
      </div>
    </div>
    <div className='flex justify-center gap-[100px] max:flex-wrap items-center mt-[100px]'>
<div className='max4:text-center'>
<h1 className='text-[30px] font-bold text-[#056088] '>Villa De Borusdz</h1>
<p className='w-[510px] max4:w-[400px] max600:w-[310px] mt-[20px]'>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
<div className='flex gap-[100px] max:flex-wrap mt-[20px] max4:text-center max4:block'>
  <h1 className='text-[#056088] font-bold text-[20px]'>Budget : $90.000</h1>
  <h1 className='text-[#056088] font-bold text-[20px] max4:mt-[20px]'>Time : 3 months</h1>
</div>
</div>
<div>
<img src="/src/assets/c4.png" alt="" />
</div>

    </div>
    <div className=' relative flex justify-center mt-[100px] max:flex-wrap max3:hidden'>
      <img src="/src/assets/video cha.png" alt="" />
    </div>
    <div className='flex justify-center max3:hidden'>
    <div className='hop1 w-[100%] h-[580px] mt-[-200px] max:flex-wrap'>
<h1 className='text-white text-[28px] pt-[300px] text-center'>Gallery</h1>
</div></div>
<div className='flex justify-center gap-[30px] mt-[-200px] max:flex-wrap max3:mt-[100px]'>
  <img src="/src/assets/a1.png" className='max3:hidden' alt="" />
  <img src="/src/assets/a2.png" alt="" />
  <img src="/src/assets/a3.png" alt="" />
</div>
<div className='flex justify-center mt-[60px]'>
  <img src="/src/assets/swiper.png" alt="" />
</div>
    </div>
  )
}

export default Story