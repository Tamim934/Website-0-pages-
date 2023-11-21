import React, { useEffect, useState } from 'react'
import Burger from '../../components/Burger'
import DarkModeToggle from '../../components/Darkmode'
import { Link, useLocation } from 'react-router-dom'
import { IconButton } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';



  


const Services = () => {
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

<div className='flex justify-center gap-[0px] items-center max:flex-wrap mt-[100px]'>

<div>
<img src="/src/assets/q.png" alt="" />
</div>
<div className='w-[769px] max4:w-[550px] max600:w-[400px] max6:w-[340px] h-[481px] bg-[#F5F5F5] pl-[40px] max600:pl-[0]'>
  <h1 className='text-[24px] text-[#056088] font-bold mt-[30px] max600:text-[18px]'>Let’s talk about anything you need</h1>
  <div className='flex max:flex-wrap gap-[10px]'>
    <input type="text" className='h-[50px] w-[340px] pl-[10px] mt-[50px] max600:w-[310px]' placeholder='Your name/company name' />
    <input type="text" className='h-[50px] w-[340px] pl-[10px] mt-[50px] max600:w-[310px]' placeholder='Phone/E-mail' />
  </div>
  <input type="text" className='w-[700px] max4:w-[400px] max6:w-[340px] max5:h-[100px] h-[183px] pl-[20px] mt-[40px]' placeholder='Messgae' />
  <button className="w-[132px] h-[62px] max6:w-[100px] text-white text-[20px] mt-[20px]" id="btn">Submit</button>
</div>

</div>
<h1 className='text-center text-[40px] text-[#056088] max4:text-[30px] max6:text-[20px] font-medium mt-[100px]'>Or contact us via e-mails or even mobile call or Whatsapp messages</h1>
<div className='flex justify-center gap-[30px] max:flex-wrap'>
<button className="w-[152px] h-[62px] max6:w-[100px] text-white text-[20px] mt-[20px]" id="btn">E-mails</button>
<button className="w-[152px] h-[62px] max6:w-[100px] text-white text-[20px] mt-[20px]" id="btn">Whatsapp</button>
<button className="w-[152px] h-[62px] max6:w-[100px] text-white text-[20px] mt-[20px]" id="btn">Message</button>

</div>
    </div>
  )
}

export default Services