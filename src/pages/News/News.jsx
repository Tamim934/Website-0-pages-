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
const News = () => {

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

  const {t, i18n } = useTranslation();

  useEffect(() => {
    const currentLanguage = localStorage.getItem('i18nextLng') || 'en';
    i18n.changeLanguage(currentLanguage);
  }, []);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem('i18nextLng', language);
  };
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
        <h1 className='text-white text-[64px] mt-[140px] font-bold max3:text-[43px] max4:text-[30px]'>Read some story from clients!</h1>
      </div>
    </div>

    <div className=' gap-[30px] mt-[60px] max:flex-wrap flex justify-center'>
      <div id='yebye' className=' pl-[40px] pr-[40px] pt-[40px] pb-[40px]' >
              <img src="src/assets/Ellipse 6.png" alt="" />
              <p className=' text-white  max4:w-[220px]  w-[400px] mt-[20px]'>I really happy to see the result my new home. It’s really good house and good price too. And they work so fast becasue they have the best team. Once again, thankyou. I really appreciate it.</p>
            <p className=' text-white font-[700] mt-[20px]' >- Mr. James</p>
      </div>
      <div  className=' pl-[40px] pr-[40px] pt-[40px] pb-[40px]' >
              <img src="/src/assets/w1.png" alt="" />
              <p className=' max4:w-[220px]  w-[400px] mt-[20px]'>I really happy to see the result my new home. It’s really good house and good price too. And they work so fast becasue they have the best team. Once again, thankyou. I really appreciate it.</p>
            <p className='  font-[700] mt-[20px]' >- Mr. Ahmad</p>
      </div>
      <div  className=' pl-[40px] pr-[40px] pt-[40px] pb-[40px]' >
              <img src="src/assets/w2.png" alt="" />
              <p className=' max4:w-[220px]  w-[400px] mt-[20px]'>I really happy to see the result my new home. It’s really good house and good price too. And they work so fast becasue they have the best team. Once again, thankyou. I really appreciate it.</p>
            <p className='  font-[700] mt-[20px]' >- Mr. Marco</p>
      </div>

    </div>

   <div>
<div className='newbg1 w-[100%] h-[428px] mt-[200px] flex justify-center gap-[100px] items-center max:flex-wrap max3:h-[1000px]'>
<div>
<img src="/src/assets/p1.png" alt="" />
</div>
<div>
<h1 className='text-[42px] max4:text-[20px] text-white'>Mr. James’s says : “I’m so happy!”</h1>
<p className='w-[510px] max4:w-[400px] max4:text-center max600:w-[300px] text-white mt-[20px] text-[16px]'>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
</div>
</div>
   </div>
<h1 className='text-center text-[30px] mt-[100px] text-[#056088] font-medium'>Mr. James’s villa</h1>
<div className='flex justify-center gap-[100px] max:flex-wrap mt-[100px]'>
  <img src="/src/assets/l1.png" alt="" />
  <img src="/src/assets/l2.png" alt="" />
  <img src="/src/assets/l3.png" alt="" />
</div>
<div className='flex justify-center mt-[60px]'>
  <img src="/src/assets/swiper.png" alt="" />
</div>
    </div>
  )
}

export default News