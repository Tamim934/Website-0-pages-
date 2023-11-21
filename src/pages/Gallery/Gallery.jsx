import React, { useEffect, useState } from 'react'
import Burger from '../../components/Burger'
import DarkModeToggle from '../../components/Darkmode'
import { Link, useLocation } from 'react-router-dom'
import { IconButton } from '@mui/material'
import { useTranslation } from 'react-i18next'
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { SketchPicker } from "react-color";
import { fileToBase64 } from "/src/utils/fileToBase64.js";

import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from "@mui/material";
import { Card, CardActionArea, CardActions, CardContent, CardMedia,  Typography } from "@mui/material";
import { Grid, Paper} from "@mui/material";
import { motion } from "framer-motion";
import { useDropzone } from 'react-dropzone';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
const Gallery = () => {
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
  const [text, setText] = useState("");
  const [addText, setAddText] = useState("");
  const [color, setColor] = useState("");
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [image, setImage] = useState(null);
  const [font, setFont] = useState("");
  const [showColorPickerEdit, setShowColorPickerEdit] = useState(false);
  const [imageEdit, setImageEdit] = useState(null);
  const [textEdit, setTextEdit] = useState("");
  const [colorEdit, setColorEdit] = useState("");
  const [fontEdit, setFontEdit] = useState("");
  const [idx, setIdx] = useState(null);
  const [modal, setModal] = useState(false);
  const [allWork, setAllWork] = useState([]);
  const api = "http://localhost:3000/Work";
  const apiSearch = `http://localhost:3000/Work?q=${text}`;
  useEffect(() => {
    async function fetchWork() {
      try {
        const { data } = await axios.get(api);
        setAllWork(data);
      } catch (error) {}
    }
  
    fetchWork();
  }, []);
  useEffect(() => {
    const filteredWork = allWork.filter(item =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
  
    setWork(filteredWork);
  }, [text]);
  

  const [work, setWork] = useState([]);

  async function getWork() {
    try {
      const { data } = await axios.get(
        text.trim().length == 0 ? api : apiSearch
      );
      setWork(data);
    } catch (error) {}
  }

  async function addWork() {
    try {
      let obj = {
        title: addText,
        color: color,
        photo: image,
        font: font
      };
      const { data } = await axios.post(api, obj);
      setAllWork(prevWork => [...prevWork, data]);
      setColor("");
      setImage(null);
      setFont("");
      setAddText("");
      setShowAddDialog(false);
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteWork(id) {
    try {
      await axios.delete(`${api}/${id}`);
      setAllWork(prevWork => prevWork.filter(item => item.id !== id)); 
    } catch (error) {
      console.error(error);
    }
  }
  

  async function editWork() {
    try {
      const { data } = await axios.put(`${api}/${idx}`, {
        title: textEdit,
        color: colorEdit,
        photo: imageEdit,
        font: fontEdit
      });
      setAllWork(prevWork => prevWork.map(item => item.id === idx ? data : item)); 
      setModal(false);
    } catch (error) {
      console.error(error);
    }
  }
  

  const handleColor = (e) => {
    setColor(e.hex);
  };

  const handleColorEdit = (e) => {
    setColorEdit(e.hex);
  };

  const handleImage = async (event) => {
    let file = await fileToBase64(event.target.files[0]);
    setImage(file);
  };

  const handleImageEdit = async (event) => {
    let file = await fileToBase64(event.target.files[0]);
    setImageEdit(file);
  };

  useEffect(() => {
    getWork();
  }, [text]);
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
        <h1 className='text-white text-[64px] mt-[140px] font-bold max3:text-[43px] max4:text-[30px]'>Here some our best works</h1>
      </div>
    </div>
    <CSSTransition in={true} appear={true} timeout={1000} classNames="fade">
      <header className="animatedHeader mt-[50px]" style={{ color: 'white', padding: '10px', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
  <h1 style={{ fontSize: '2em', fontWeight: 'bold', color:"black" }}>Work Items</h1>
 
  <TextField 
  id="outlined-basic" 
  label="Search" 
 
  variant="outlined" 
  value={text} 
  onChange={(e) => setText(e.target.value)}
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <SearchIcon />
      </InputAdornment>
    ),
  }}
/>
<motion.div 
                whileHover={{ scale: 1.2 }} 
                whileTap={{ scale: 0.9 }} 
              >
  <Button variant="contained" color="success" onClick={() => setShowAddDialog(true)}>Add</Button>
  </motion.div>
</header>
</CSSTransition>
<Dialog open={showAddDialog} onClose={() => setShowAddDialog(false)} fullWidth maxWidth='sm'>
  <DialogTitle>Add Work</DialogTitle>
  <DialogContent>
    <TextField label="Title" value={addText} onChange={(e) => setAddText(e.target.value)} fullWidth />
    
    <div {...getRootProps({ className: 'dropzone' })} style={{ 
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'center', 
  height: '100px', 
  border: '2px dashed #888', 
  borderRadius: '5px',
  backgroundColor: '#f3f3f3',
  color: '#888',
  fontSize: '16px',
  textAlign: 'center',
  cursor: 'pointer'
}}>
  <input {...getInputProps()} />
  <p>Drag 'n' drop some files here, or click to select files</p>
</div>
    <img src={image} alt="" />
    
    {showColorPicker ? <SketchPicker color={color} onChange={handleColor} /> : null}
    <Button variant="contained" color="primary" onClick={() => setShowColorPicker(!showColorPicker)}>Select Color</Button>
  </DialogContent>
  <DialogActions>
    <Button onClick={() => addWork()}>Add</Button>
  </DialogActions>
</Dialog>


      <div className="flex items-center justify-evenly flex-wrap gap-[100px]">
  {allWork.filter(item => item.title.toLowerCase().includes(text.toLowerCase())).map((e) => {
    return (
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      style={{ width: 300 }} 
    >
      <Card style={{ width: '100%', marginTop: 16, backgroundColor: e.color }}>
        <img
          alt="example"
          src={e.photo ? e.photo : "https://th.bing.com/th/id/OIP.wesIS_zZYjJ0HN6p-AXUrgHaHa?pid=ImgDet&rs=1"}
          style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
        />
          <div style={{ padding: 20 }}>
            <h6 className='text-[22px] font-medium text-[#056088]'>{e.title}</h6>
            <h1 className='mt-[10px] text-[15px]'>3 Months work time</h1>
           
            <div className='gap-[10px]' style={{ display: 'flex', justifyContent: 'space-around', marginTop: 20 }}> 
            <motion.div 
                whileHover={{ scale: 1.2 }} 
                whileTap={{ scale: 0.9 }} 
              >
<button className='w-[100px] text-white  h-[35px] bg-gradient-to-r from-cyan-500 to-blue-500'> 
  <a href="https://www.figma.com/file/WHZcQuIaX1vN90jZQsmjBT/DB1?type=design&node-id=6-193&mode=design&t=ciUcZ7aJrI72Q0Jd-0" target="_blank" rel="noopener noreferrer">See process</a>
</button>

            </motion.div>
              <motion.div 
                whileHover={{ scale: 1.2 }} 
                whileTap={{ scale: 0.9 }} 
              >
                <Button variant="contained" color="error" onClick={() => deleteWork(e.id)}>
                  Delete
                </Button>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.2 }} 
                whileTap={{ scale: 0.9 }} 
              >
              <Button variant="contained" color="primary" onClick={() => { setIdx(e.id); setModal(true); setColorEdit(e.color); setImageEdit(e.photo); setTextEdit(e.title); }}>
                Edit
              </Button>
              </motion.div>
            </div>
          </div>
        </Card>
      </motion.div>
    );
  })}
</div>

{modal ? (
  <Dialog open={modal} onClose={() => setModal(false)} fullWidth maxWidth='sm'>
  <DialogTitle>Edit Work</DialogTitle>
  <DialogContent>
    <TextField type="text" value={textEdit} onChange={(e) => setTextEdit(e.target.value)} fullWidth />
    
    <div {...getRootPropsEdit({ className: 'dropzone' })} style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100px', 
      border: '2px dashed #888', 
      borderRadius: '5px',
      backgroundColor: '#f3f3f3',
      color: '#888',
      fontSize: '16px',
      textAlign: 'center',
      cursor: 'pointer'
    }}>
      <input {...getInputPropsEdit()} />
      <p>Drag 'n' drop some files here, or click to select files</p>
    </div>
    <img src={imageEdit} alt="" />
    
    {showColorPickerEdit ? <SketchPicker color={colorEdit} onChange={handleColorEdit} /> : null}
    <Button variant="contained" color="primary" onClick={() => setShowColorPickerEdit(!showColorPickerEdit)}>Select Color</Button>
  </DialogContent>
  <DialogActions>
    <Button onClick={() => editWork()}>Submit</Button>
  </DialogActions>
</Dialog>

      ) : null}
    </div>
   
  )
}

export default Gallery