import './App.css'
import Burger from './components/Burger'
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, {useEffect} from "react"
import Switcher from './components/Switcher'
import { useTranslation } from "react-i18next"
import Services from './pages/Services/Services'
import { Button } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from './Layouts/Layout'
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

import NotFound from "./pages/NotFound/NotFound";
import Gallery from './pages/Gallery/Gallery';
import Contact from './pages/Contact/Contact';
import Story from './pages/Story/Story';
import Careers from './pages/Careers/Careers';
import News from './pages/News/News';
import Save from './pages/Save/Save';
import Games from './pages/Games/Games';



function App() {

  const wifi = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          index: true,
          // path:"/"
          element: <Home />,
        },
        {
          path: "About",
          element: <About />,
        },
     {
      path:"Services",
      element:<Services/>
     },
     {
      path:"Gallery",
      element:<Gallery/>
     },
     {
      path:"Contact",
      element:<Contact/>
     },
     {
      path:"Story",
      element:<Story/>
     },
     {
      path:"Careers",
      element:<Careers/>


    },
    {
path:"News",
element:<News/>
    },
    {
path:"Save",
element:<Save/>
    },
   

      ],
  
    },
    {
      path: "*",
      element: <NotFound />,
    }, {
      path:"Games",
element:<Games/>
    }
  ]); 


  useEffect(() => {
    AOS.init();
  }, [])

  const {t, i18n } = useTranslation()

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
  }

  localStorage.setItem("hello", true)
  localStorage.setItem("hello", false)

   localStorage.removeItem("hello")
  
  const active =  localStorage.getItem("i18nextLng")


  return (
   <div id='op'>

        {/* 
    <h1>{t("hello")}</h1>
    <div className='flex'>
      <IconButton onClick={() => changeLanguage("en")}><TranslateIcon></TranslateIcon>En</IconButton>
      <IconButton onClick={() => changeLanguage("ru")}><TranslateIcon></TranslateIcon>Ru</IconButton>
</div> */}
{/* <div data-aos="zoom-out-left"  className=' xs:pl-[20px] sm:pl-[60px]   pl-[100px] sticky'>
<Button   className='  dark:font-[700] dark:bg-white dark:text-[#1E959B]'   style={{color : active == "en" ? "blue" : "black"}}
        onClick={() => changeLanguage("en")}>Russain</Button>
<Button   className='  dark:font-[700] dark:bg-white dark:text-[#1E959B]'  style={{color : active == "ru" ? "blue" : "black"}}
        onClick={() => changeLanguage("ru")}>persian</Button>
  
</div> */}
<RouterProvider router={wifi} />;
</div>

   
  )
}

export default App