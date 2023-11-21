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

const Careers = () => {
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
        <h1 className='text-white text-[64px] mt-[140px] font-bold max3:text-[43px] max4:text-[30px]'>Have a briliant idea? Join with us.<br></br> We have an oppurtunity for you</h1>
      </div>
    </div>
    <div className='flex justify-center mt-[100px] gap-[100px] max:flex-wrap'>
<div className='w-[420px] max600:w-[320px] max5:w-[340px] h-[300px] shadow-xl'>
  <div className='pl-[20px] pt-[20px]'>
    <h1 className='text-[23px] text-[#056088] font-bold'>Senior architect</h1>

    <h1  className='flex items-center gap-[4px] text-[18px] mt-[15px]'><img src="/src/assets/clock.png" alt="" /> 5+ years experience</h1>
    <h1  className='flex items-center gap-[4px] text-[18px] mt-[15px]'><img src="/src/assets/clock2.png" alt="" /> Full-time</h1>
    <h1  className='flex items-center gap-[4px] text-[18px] mt-[15px]'><img src="/src/assets/clock3.png" alt="" />$9000/month</h1>
  </div>
  <button  className='w-[150px] text-white  h-[65px] bg-gradient-to-r from-cyan-500 to-blue-500 ml-[20px] mt-[30px]'> 
  <a href="https://www.figma.com/file/WHZcQuIaX1vN90jZQsmjBT/DB1?type=design&node-id=6-193&mode=design&t=ciUcZ7aJrI72Q0Jd-0" target="_blank" rel="noopener noreferrer">Deatils</a>
</button>
</div>

<div className='w-[420px] max600:w-[320px] max5:w-[340px] h-[300px] shadow-xl'>
  <div className='pl-[20px] pt-[20px]'>
    <h1 className='text-[23px] text-[#056088] font-bold'>Head of constructions</h1>

    <h1  className='flex items-center gap-[4px] text-[18px] mt-[15px]'><img src="/src/assets/clock.png" alt="" /> 5+ years experience</h1>
    <h1  className='flex items-center gap-[4px] text-[18px] mt-[15px]'><img src="/src/assets/clock2.png" alt="" /> Full-time</h1>
    <h1  className='flex items-center gap-[4px] text-[18px] mt-[15px]'><img src="/src/assets/clock3.png" alt="" />$9000/month</h1>
  </div>
  <button  className='w-[150px] text-white  h-[65px] bg-gradient-to-r from-cyan-500 to-blue-500 ml-[20px] mt-[30px]'> 
  <a href="https://www.figma.com/file/WHZcQuIaX1vN90jZQsmjBT/DB1?type=design&node-id=6-193&mode=design&t=ciUcZ7aJrI72Q0Jd-0" target="_blank" rel="noopener noreferrer">Deatils</a>
</button>
</div>

<div className='w-[420px] max600:w-[320px] max5:w-[340px] h-[300px] shadow-xl'>
  <div className='pl-[20px] pt-[20px]'>
    <h1 className='text-[23px] text-[#056088] font-bold'>Drafter</h1>

    <h1  className='flex items-center gap-[4px] text-[18px] mt-[15px]'><img src="/src/assets/clock.png" alt="" /> 5+ years experience</h1>
    <h1  className='flex items-center gap-[4px] text-[18px] mt-[15px]'><img src="/src/assets/clock2.png" alt="" /> Full-time</h1>
    <h1  className='flex items-center gap-[4px] text-[18px] mt-[15px]'><img src="/src/assets/clock3.png" alt="" />$9000/month</h1>
  </div>
  <button  className='w-[150px] text-white  h-[65px] bg-gradient-to-r from-cyan-500 to-blue-500 ml-[20px] mt-[30px]'> 
  <a href="https://www.figma.com/file/WHZcQuIaX1vN90jZQsmjBT/DB1?type=design&node-id=6-193&mode=design&t=ciUcZ7aJrI72Q0Jd-0" target="_blank" rel="noopener noreferrer">Deatils</a>
</button>
</div>

    </div>

    <div className='flex justify-center mt-[100px] gap-[100px] max:flex-wrap'>
<div className='w-[420px] max600:w-[320px] max5:w-[340px] h-[300px] shadow-xl'>
  <div className='pl-[20px] pt-[20px]'>
    <h1 className='text-[23px] text-[#056088] font-bold'>Web developer</h1>

    <h1  className='flex items-center gap-[4px] text-[18px] mt-[15px]'><img src="/src/assets/clock.png" alt="" /> 5+ years experience</h1>
    <h1  className='flex items-center gap-[4px] text-[18px] mt-[15px]'><img src="/src/assets/clock2.png" alt="" /> Full-time</h1>
    <h1  className='flex items-center gap-[4px] text-[18px] mt-[15px]'><img src="/src/assets/clock3.png" alt="" />$9000/month</h1>
  </div>
  <button  className='w-[150px] text-white  h-[65px] bg-gradient-to-r from-cyan-500 to-blue-500 ml-[20px] mt-[30px]'> 
  <a href="https://www.figma.com/file/WHZcQuIaX1vN90jZQsmjBT/DB1?type=design&node-id=6-193&mode=design&t=ciUcZ7aJrI72Q0Jd-0" target="_blank" rel="noopener noreferrer">Deatils</a>
</button>
</div>

<div className='w-[420px] max600:w-[320px] max5:w-[340px] h-[300px] shadow-xl'>
  <div className='pl-[20px] pt-[20px]'>
    <h1 className='text-[23px] text-[#056088] font-bold'>Interior designer</h1>

    <h1  className='flex items-center gap-[4px] text-[18px] mt-[15px]'><img src="/src/assets/clock.png" alt="" /> 5+ years experience</h1>
    <h1  className='flex items-center gap-[4px] text-[18px] mt-[15px]'><img src="/src/assets/clock2.png" alt="" /> Full-time</h1>
    <h1  className='flex items-center gap-[4px] text-[18px] mt-[15px]'><img src="/src/assets/clock3.png" alt="" />$9000/month</h1>
  </div>
  <button  className='w-[150px] text-white  h-[65px] bg-gradient-to-r from-cyan-500 to-blue-500 ml-[20px] mt-[30px]'> 
  <a href="https://www.figma.com/file/WHZcQuIaX1vN90jZQsmjBT/DB1?type=design&node-id=6-193&mode=design&t=ciUcZ7aJrI72Q0Jd-0" target="_blank" rel="noopener noreferrer">Deatils</a>
</button>
</div>

<div className='w-[420px] max600:w-[320px] max5:w-[340px] h-[300px] shadow-xl'>
  <div className='pl-[20px] pt-[20px]'>
    <h1 className='text-[23px] text-[#056088] font-bold'>Interior designer</h1>

    <h1  className='flex items-center gap-[4px] text-[18px] mt-[15px]'><img src="/src/assets/clock.png" alt="" /> 5+ years experience</h1>
    <h1  className='flex items-center gap-[4px] text-[18px] mt-[15px]'><img src="/src/assets/clock2.png" alt="" /> Full-time</h1>
    <h1  className='flex items-center gap-[4px] text-[18px] mt-[15px]'><img src="/src/assets/clock3.png" alt="" />$9000/month</h1>
  </div>
  <button  className='w-[150px] text-white  h-[65px] bg-gradient-to-r from-cyan-500 to-blue-500 ml-[20px] mt-[30px]'> 
  <a href="https://www.figma.com/file/WHZcQuIaX1vN90jZQsmjBT/DB1?type=design&node-id=6-193&mode=design&t=ciUcZ7aJrI72Q0Jd-0" target="_blank" rel="noopener noreferrer">Deatils</a>
</button>
</div>

    </div>

    <div className='flex justify-center mt-[100px] gap-[100px] max:flex-wrap'>
<div className='w-[420px] max600:w-[320px] max5:w-[340px] h-[300px] shadow-xl'>
  <div className='pl-[20px] pt-[20px]'>
    <h1 className='text-[23px] text-[#056088] font-bold'>UI/UX Designer</h1>

    <h1  className='flex items-center gap-[4px] text-[18px] mt-[15px]'><img src="/src/assets/clock.png" alt="" /> 5+ years experience</h1>
    <h1  className='flex items-center gap-[4px] text-[18px] mt-[15px]'><img src="/src/assets/clock2.png" alt="" /> Full-time</h1>
    <h1  className='flex items-center gap-[4px] text-[18px] mt-[15px]'><img src="/src/assets/clock3.png" alt="" />$9000/month</h1>
  </div>
  <button  className='w-[150px] text-white  h-[65px] bg-gradient-to-r from-cyan-500 to-blue-500 ml-[20px] mt-[30px]'> 
  <a href="https://www.figma.com/file/WHZcQuIaX1vN90jZQsmjBT/DB1?type=design&node-id=6-193&mode=design&t=ciUcZ7aJrI72Q0Jd-0" target="_blank" rel="noopener noreferrer">Deatils</a>
</button>
</div>

<div className='w-[420px] max600:w-[320px] max5:w-[340px] h-[300px] shadow-xl'>
  <div className='pl-[20px] pt-[20px]'>
    <h1 className='text-[23px] text-[#056088] font-bold'>Driver</h1>

    <h1  className='flex items-center gap-[4px] text-[18px] mt-[15px]'><img src="/src/assets/clock.png" alt="" /> 5+ years experience</h1>
    <h1  className='flex items-center gap-[4px] text-[18px] mt-[15px]'><img src="/src/assets/clock2.png" alt="" /> Full-time</h1>
    <h1  className='flex items-center gap-[4px] text-[18px] mt-[15px]'><img src="/src/assets/clock3.png" alt="" />$9000/month</h1>
  </div>
  <button  className='w-[150px] text-white  h-[65px] bg-gradient-to-r from-cyan-500 to-blue-500 ml-[20px] mt-[30px]'> 
  <a href="https://www.figma.com/file/WHZcQuIaX1vN90jZQsmjBT/DB1?type=design&node-id=6-193&mode=design&t=ciUcZ7aJrI72Q0Jd-0" target="_blank" rel="noopener noreferrer">Deatils</a>
</button>
</div>

<div className='w-[420px] max600:w-[320px] max5:w-[340px] h-[300px] shadow-xl'>
  <div className='pl-[20px] pt-[20px]'>
    <h1 className='text-[23px] text-[#056088] font-bold'>Designer</h1>

    <h1  className='flex items-center gap-[4px] text-[18px] mt-[15px]'><img src="/src/assets/clock.png" alt="" /> 5+ years experience</h1>
    <h1  className='flex items-center gap-[4px] text-[18px] mt-[15px]'><img src="/src/assets/clock2.png" alt="" /> Full-time</h1>
    <h1  className='flex items-center gap-[4px] text-[18px] mt-[15px]'><img src="/src/assets/clock3.png" alt="" />$9000/month</h1>
  </div>
  <button  className='w-[150px] text-white  h-[65px] bg-gradient-to-r from-cyan-500 to-blue-500 ml-[20px] mt-[30px]'> 
  <a href="https://www.figma.com/file/WHZcQuIaX1vN90jZQsmjBT/DB1?type=design&node-id=6-193&mode=design&t=ciUcZ7aJrI72Q0Jd-0" target="_blank" rel="noopener noreferrer">Deatils</a>
</button>
</div>

    </div>
    <h1 className='text-center mt-[150px] text-[30px] text-[#056088] font-bold'>See More</h1>
    </div>
  )
}

export default Careers