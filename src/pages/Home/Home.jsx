import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, Outlet, useLocation } from "react-router-dom";
import Burger from "../../components/Burger";
import { IconButton } from "@mui/material";
import TranslateIcon from '@mui/icons-material/Translate';
import DarkModeToggle from "../../components/Darkmode";
import Footer from "../../components/Footer";

const Home = () => {

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
   <div className="flex" >
   
<div className="w-[100%] home h-[90vh] pt-[20px]" >  <header className='flex items-center justify-around'>
        <img className=' z-10 max5:w-[50px]' src="/src/assets/logo.png" alt="Logo" />
     <div className=" max4:flex hidden">
          <Burger />
      </div>
          <nav className='flex justify-between w-[50%] items-center text-[20px] z-10 max2:text-[15px] max3:w-[60%] max3:text-[12px] max4:hidden' >
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
   <div className=" hg w-[30%] pt-[20px] mt-[-72px] h-[90vh] ">
      

    </div> <div className=" text-white mt-[-600px] ml-[150px] max:mt-[-500px] max4:text-center max4:ml-[0]" data-aos="fade-right" data-aos-offset="300"
     data-aos-easing="ease-in-sine">
      <h1 className="text-[70px] font-medium max:text-[50px] max4:text-[30px]" >We build your dream house<br></br> well and professionally</h1>
      <h1 className="text-[20px] mt-[20px]">Our team can build a house according to your wishes.<br></br> Any design and concept, we will help make it happen</h1>
      <button id="btn" className="w-[187px] h-[92px] text-white text-[22px] mt-[20px]">Contact us</button>
      </div>
  </div> </div>
  <div className="flex justify-center gap-[100px] items-center mt-[200px] max:flex-wrap max600:text-center">
    <div data-aos="fade-right" data-aos-offset="300"
     data-aos-easing="ease-in-sine">
<img src="/src/assets/suii.png" alt="" />
    </div>
    <div data-aos="fade-left" data-aos-offset="300"
     data-aos-easing="ease-in-sine">
<h1 className="text-[28px] font-medium text-[#056088]">Our company</h1>
<h1 className="text-[20px] mt-[20px]">Debuilds is a team of architects, interior design, and<br></br> contractors who help our clients not only to<br></br> build their dream building, but also to feel comfortable<br></br> after the building is used.</h1>
<h1 className="text-[18px] mt-[20px]">We already handled</h1>
<div className="text-[#056088] text-[20px] mt-[30px] font-medium flex justify-between">
  <h1 className="text-[gray] text-[32px]">50+ Clients</h1>
  <h1 className="text-[gray] text-[32px]">30+ House</h1>
  <h1 className="text-[gray] text-[32px]">20+ Building</h1>
</div>
<button className="w-[158px] h-[72px] text-white text-[17px] mt-[30px]" id="btn">See more</button>
    </div>
  </div>
      <main>
        <Outlet />
      </main>
     <div className="text-center mt-[200px]" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
      <h1 className="text-[#056088] text-[30px] font-medium">Our services</h1>
      <p className="text-[20px] mt-[30px]">Our services include building new<br></br> buildings and renovating old buildings</p>
     </div>

     <div className="flex justify-center max:flex-wrap mt-[100px]" data-aos="zoom-in">

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

     <div className="text-center mt-[200px]">
      <h1 className="text-[#056088] text-[30px] font-medium">Our benefits</h1>
      <p className="text-[20px] mt-[30px]">Here our benefits if you collaboration with <br></br>our team</p>
     </div>

     <div className="flex justify-center gap-[100px] max:flex-wrap mt-[100px]">
<div className="w-[420px] max6:w-[340px] h-[313px] text-center text-white" data-aos="fade-right"
  
     data-aos-offset="500"
     data-aos-duration="500" id="gh">
<div className="flex justify-center pt-[40px]">
 <img src="/src/assets/checkbox.png" alt="" />
</div>
<h1 className="text-[23px] font-medium mt-[30px]">Flexible time</h1>
<p className="mt-[10px] text-18px">We work wherever you ready<br></br> to builds. Work fast<br></br> and profesional</p>
</div>
<div className="w-[420px] max6:w-[340px] h-[313px] text-center text-white" id="gh2">
<div className="flex justify-center pt-[40px]">
 <img src="/src/assets/checkbox.png" alt="" />
</div>
<h1 className="text-[23px] font-medium mt-[30px]">Customizable design</h1>
<p className="mt-[10px] text-18px">We can design your buildings,<br></br> but we open if you want to<br></br> customize your design or <br></br>if you have architect</p>
</div>

<div className="w-[420px] max6:w-[340px] h-[313px] text-center text-white" data-aos="fade-left"
  
  data-aos-offset="500"
  data-aos-duration="500" id="gh3">
<div className="flex justify-center pt-[40px]">
 <img src="/src/assets/checkbox.png" alt="" />
</div>
<h1 className="text-[23px] font-medium mt-[30px]">Negotiable price</h1>
<p className="mt-[10px] text-18px">Yes, we’re open to negotiate<br></br>the price with you, and we will<br></br> give the best price for<br></br> our lovely clients</p>
</div>





     </div>

     <div className="w-[100%] h-[160vh] max4:h-[100vh] mt-[-50px]" id="newbg">
     <div className="text-center pt-[200px]">
      <h1 className="text-white text-[30px] font-medium">Our works</h1>
      <p className="text-[20px] text-white mt-[30px]">Here our some of the best the<br></br> result when we build some<br></br> buildings, houses, and also<br></br> interior designs</p>
     </div>
   <div className="flex justify-center mt-[100px]">
     <div class="container">
  <div class="area1"><img src="/src/assets/22.png" alt="" /></div>
  <div class="area2"><img src="/src/assets/3.png" alt="" /></div>
  <div class="areastart"><img src="/src/assets/1.png" alt="" /></div>
  <div class="ara6"><img src="/src/assets/6.png" alt="" /></div>
  <div class="area8"><img src="/src/assets/8.png" alt="" /></div>
  <div class="area9"><img src="/src/assets/9.png" alt="" /></div>
  <div class="area5"><img src="/src/assets/5.png" alt="" /></div>
  <div class="area90"><img src="/src/assets/10.png" alt="" /></div>
  <div class="area4"><img src="/src/assets/4.png" alt="" /></div>
</div>
</div><div className="flex justify-center">
     <button className="w-[158px] h-[72px] text-white text-[17px] mt-[30px]" id="btn">See more</button>
     </div>
     <div className="flex justify-center mt-[100px] max4:hidden" data-aos="zoom-in"   data-aos-offset="500">
      <img  src="/src/assets/qomar.png" alt="" />
     </div>
     </div>
     <div className="flex justify-around mt-[200px] max:mt-[700px] max:flex-wrap max4:hidden" >
      <h1 className="text-[#056088] text-[32px]">Our Partners</h1>
      <h1 className="text-[gray] text-[32px]">J.construct</h1>
      <h1 className="text-[gray] text-[32px]">Arch</h1>
      <h1 className="text-[gray] text-[32px]">Whix.co</h1>
      <h1 className="text-[gray] text-[32px]">DZIKRA</h1>
     </div>
     <div className="flex justify-center mt-[100px] max4:mt-[120px]" data-aos="fade-down">
     <img src="/src/assets/video.png" alt="" />
     </div>

     <div className="flex justify-center mt-[100px]">
<div id="hi" className="w-[90%] h-[430px]">
<h1 className="text-white max6:text-[30px] text-[40px] text-center pt-[40px]">Want to get our offer<br></br> updates and news?</h1>
<h1 className="text-[20px] text-center max6:text-[17px] text-white mt-[20px]">Submit your e-mail and we will give you updateabout <br></br> information and discount. Every single week. (not spamming)</h1>
<div className="flex justify-center mt-[30px]">
<input type="text" className="w-[500px] max4:w-[400px] max6:w-[200px] max600:w-[300px] h-[62px] pl-[20px]" placeholder="Enter your e-mail here"  /> 
<button className="w-[132px] h-[62px] max6:w-[100px] text-white text-[20px]" id="btn">Submit</button></div>
</div>


     </div>
    </div>
  );
  
}

export default Home
