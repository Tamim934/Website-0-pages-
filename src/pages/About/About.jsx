import React, { useEffect, useState } from 'react'
import Burger from '../../components/Burger'
import DarkModeToggle from '../../components/Darkmode'
import { Link, useLocation } from 'react-router-dom'
import { IconButton } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';


const About = () => {
  
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
        <h1 className='text-white text-[64px] mt-[140px] font-bold max3:text-[43px] max4:text-[30px]'>About our story - We are<br></br> the best team</h1>
      </div>
</div>
<div className='flex justify-center gap-[200px] items-center max:flex-wrap mt-[100px]'>

<div className='max:flex-wrap max4:m-[0] max3:mt-[30px]'>
<img src="/src/assets/ph.png" alt="" />
<img className=' absolute max4:hidden mt-[-200px] ml-[200px]' src="/src/assets/ph2.png" alt="" />
</div>
<div>
<h1 className='text-[30px] text-[#056088]'>Here were the story begins</h1>
<p className='text-[16px] w-[510px] max4:w-[420px] max6:w-[340px] max6:text-center mt-[20px]'>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
<p className='text-[16px] w-[510px] max4:w-[420px] max6:w-[340px] max6:text-center mt-[20px]'>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
</div>

</div>


<div className='flex justify-center mt-[200px] max:flex-wrap'>
      <div id='zz' className='w-[90%] h-[430px] flex justify-around items-center max:hidden'>
        <div className=''>
          <h1 className='text-white text-[30px] font-medium'>We love to make perfect home</h1>
          <p className='w-[510px] max4:w-[400px] max6:w-[340px] text-white mt-[30px] text-[18px]'>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>
        <div className='w-[700px]'>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
           <SwiperSlide>
  <img src="/src/assets/z.png" alt="" style={{maxWidth: '100%', maxHeight: '100%'}} />
</SwiperSlide>
<SwiperSlide>
  <img src="/src/assets/c1.png" alt="" style={{maxWidth: '100%', maxHeight: '100%'}} />
</SwiperSlide>
<SwiperSlide>
  <img src="/src/assets/c2.png" alt="" style={{maxWidth: '100%', maxHeight: '100%'}} />
</SwiperSlide>
          
          </Swiper>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About