import React, { useEffect, useState } from 'react'
import Burger from '../../components/Burger'
import DarkModeToggle from '../../components/Darkmode'
import { Link, useLocation } from 'react-router-dom'
import { IconButton } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const Save = () => {
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
        <h1 className='text-white text-[64px] mt-[140px] font-bold max3:text-[43px] max4:text-[30px]'>Need some consultation or want to<br></br> collaborarion with us? Let’s connect!</h1>
      </div>
</div>
<div className="flex justify-center max:flex-wrap mt-[100px]">

<div className=" flex justify-around gap-[50px] max:flex-wrap">
  <img src="/src/assets/kaif.png" alt="" />
  <div className="w-[310px] h-[240px] p-[2%]">
<img src="/src/assets/couch.png" alt="" />
<h1 className="text-[20px] mt-[24px] font-medium">Interior Design</h1>
<p className="w-[210px mt-[20px] text-[16px]">We have an interior designer for design your perfect inside house</p>
  </div>
  <div className="w-[310px] h-[240px] p-[2%]">
<img src="/src/assets/b.png" alt="" />
<h1 className="text-[20px] mt-[24px] font-medium">Build from scratch</h1>
<p className="w-[210px mt-[20px] text-[16px]">We have an contractor for build new building from scratch</p>
  </div>
  <div className="w-[310px] h-[240px] p-[2%]">
<img src="/src/assets/b1.png" alt="" />
<h1 className="text-[20px] mt-[24px] font-medium">Renovation</h1>
<p className="w-[210px mt-[20px] text-[16px]">We can also renovate or rebuilds new buildings/house</p>
  </div>
 
</div>

     </div>

     <div className='flex justify-center mt-[100px] max:flex-wrap'>
      <div className='lop w-[85%] max6:w-[100%]  h-[428px] flex gap-[200px] items-center max:flex-wrap max:gap-[0px] max:justify-center max:text-center'>
<div>
 <img className='ml-[30px] max:hidden' src="/src/assets/q12.png" alt="" />
 <img className='mt-[-428px] relative max:hidden' src="/src/assets/slice.png" alt="" />
</div>
<div className=' max5:text-center'>
 <h1 className='text-white text-[30px] font-medium max600:text-[20px]'>Design building / house</h1>
 <p className='w-[510px] max4:w-[400px] max600:w-[310px] text-white mt-[40px] text-[17px] max600:text-[13px]'>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
</div>
      </div>
     </div>

     
     <div className='flex justify-center mt-[100px] max:flex-wrap'>
      <div className='lop w-[85%]  h-[428px] flex justify-end items-center max6:w-[100%] gap-[200px] max:flex-wrap max:gap-[0px] max:justify-center max:text-center'>
   <div className=' max5:text-center'>

 <p className='w-[510px] max4:w-[400px] max600:w-[310px] text-white mt-[40px] text-[22px] max600:text-[13px]'>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
</div>    
<div>

 <img className=' relative max:hidden' src="/src/assets/slice2.png" alt="" />
</div>

      </div>
     </div>
    </div>
  )
}

export default Save