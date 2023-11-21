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
const Contact = () => {
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
        <h1 className='text-white text-[64px] mt-[140px] font-bold max3:text-[43px] max4:text-[30px]'>Article and news about property<br></br> and constructions</h1>
      </div>
    </div>
    <div className='flex justify-center mt-[100px] relative max3:hidden'>
<div className='hop w-[80%] h-[436px] flex justify-around items-end pt-[100px]'>
  <div className='flex justify-around gap-[300px] '>
<h1 className='text-[50px] text-white font-medium'>Today’s property news</h1>
<p className='text-[20px] text-white w-[340px]'>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'</p>
</div>

</div>

    </div> <div className='flex justify-center max3:hidden'>
    <div className='hop1 w-[100%] h-[580px] mt-[-100px]'>

</div></div>
<div className='mt-[-300px] relative flex justify-center gap-[100px] max:flex-wrap max3:mt-[150px]'>
  <div className='w-[420px] max600:w-[400px] max6:w-[340px] h-[544px] bg-white '>
     <img src="/src/assets/ave.png" alt="" />
     <div className='pl-[20px]'>
     <h1 className='text-[23px] font-medium text-[#056088] pt-[20px]'>Tips of the week</h1>
     <p className='text-[gray] pt-[20px]'>is simply dummy text of the printing and<br></br> typesetting industry. Lorem Ipsum has<br></br> been the industry'</p>
     <button className='w-[160px] mt-[30px] text-[20px] text-white  h-[75px] bg-gradient-to-r from-cyan-500 to-blue-500'>Read More</button>
     </div>
  </div>
  <div className='w-[420px] max600:w-[400px] max6:w-[340px] h-[544px] bg-white '>
     <img src="/src/assets/ave2.png" alt="" />
     <div className='pl-[20px]'>
     <h1 className='text-[23px] font-medium text-[#056088] pt-[20px]'>House price is high now</h1>
     <p className='text-[gray] pt-[20px]'>is simply dummy text of the printing and<br></br> typesetting industry. Lorem Ipsum has<br></br> been the industry'</p>
     <button className='w-[160px] mt-[30px] text-[20px] text-white  h-[75px] bg-gradient-to-r from-cyan-500 to-blue-500'>Read More</button>
     </div>
  </div>
  <div className='w-[420px] max600:w-[400px] max6:w-[340px] h-[544px] bg-white '>
     <img src="/src/assets/sve3.png" alt="" />
     <div className='pl-[20px]'>
     <h1 className='text-[23px] font-medium text-[#056088] pt-[20px]'>Good investment in property</h1>
     <p className='text-[gray] pt-[20px]'>is simply dummy text of the printing and<br></br> typesetting industry. Lorem Ipsum has<br></br> been the industry'</p>
     <button className='w-[160px] mt-[30px] text-[20px] text-white  h-[75px] bg-gradient-to-r from-cyan-500 to-blue-500'>Read More</button>
     </div>
  </div>
  
</div>
<h1 className='text-center text-[30px] text-[#056088] font-bold mt-[200px]'>See More</h1>
    </div>
  )
}

export default Contact