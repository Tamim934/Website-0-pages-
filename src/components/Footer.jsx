import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
   <div className="text-white mt-[100px]">
    <div className="bg-[#023957] w-[100%] max5:h-[200vh] h-[400px] flex justify-around pt-[60px] gap-[10px] max5:flex-col max5:justify-center max5:text-center">
<div className=" max5:flex max5:justify-center items-center">
  <img className=" " src="/src/assets/logo.png" alt="" />
  <h1 className="text-white mt-[20px] max5:hidden">Lizenzo street number 12<br></br>
Jakarta, Indonesia</h1>
<button id="btn" className="w-[113px] h-[60px] text-white mt-[20px] max5:hidden">Get directions</button>
</div>
<div>
  <h1 className=" font-medium text-[25px]">Menu</h1>
  <h1 className="text-[16px] mt-[25px]">Home</h1>
  <h1 className="text-[16px] mt-[20px]">About</h1>
  <h1 className="text-[16px] mt-[20px]">gallery</h1>
  <h1 className="text-[16px] mt-[20px]">Servises</h1>
</div>
<div>
  <h1 className=" font-medium text-[25px]">Career</h1>
  <h1 className="text-[16px] mt-[25px]">job</h1>
  <h1 className="text-[16px] mt-[20px]">part time</h1>
  <h1 className="text-[16px] mt-[20px]">intership</h1>
  <h1 className="text-[16px] mt-[20px]">Servises</h1>
</div>
<div>
  <h1 className=" font-medium text-[25px]">Contact</h1>
  <h1 className="text-[16px] mt-[25px]">E-mail</h1>
  <h1 className="text-[16px] mt-[20px]">Phone</h1>
  <h1 className="text-[16px] mt-[20px]">WhatsApp</h1>
  <h1 className="text-[16px] mt-[20px]">Phone</h1>
</div>
<div>
  <h1 className=" font-medium text-[25px]">Bussnises</h1>
  <h1 className="text-[16px] mt-[25px]">Affilet</h1>
  <h1 className="text-[16px] mt-[20px]">Collaboration</h1>
  <h1 className="text-[16px] mt-[20px]">Infestments</h1>
  <h1 className="text-[16px] mt-[20px]">People</h1>
</div>

    </div>
    <div className="h-[8vh] flex justify-center items-center">
      <h1 className="text-[23px] text-black">2021 - Copyright ZHB Studio</h1>
    </div>
   </div>
  
  );
};

export default Footer;
