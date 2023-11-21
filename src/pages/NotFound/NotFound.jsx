import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';


const NotFound = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  
  const navigate = useNavigate()
  return (
<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#282c34', color: '#fff' }}>
      <h1 data-aos="fade-up">404 - Not Found!</h1>
      <p data-aos="fade-up">The page you are looking for does not exist.</p>
      <img src='/src/assets/404.jpg' alt='Not found' data-aos="fade-up"/>
      <Link to='/' style={{ color: '#61dafb', marginTop: '20px' }} data-aos="fade-up">Go Home</Link>
      <Link to='/Games' style={{ color: '#61dafb', marginTop: '20px' }} data-aos="fade-up">Play a Game</Link>
    </div>
  );
};

export default NotFound;
