import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import TranslateIcon from '@mui/icons-material/Translate';
import DarkModeToggle from './Darkmode';

import { useTranslation } from "react-i18next"
import { Link, useLocation } from 'react-router-dom';

export default function Burger() {
  const [state, setState] = React.useState({
    right: false,
  });
  const {t, i18n } = useTranslation()

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
  }

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const { pathname } = useLocation();
  const active= localStorage.getItem("i18nextLng");

  


  const list = (anchor) => (

    <Box
    sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
    role="presentation"
    onClick={toggleDrawer(anchor, false)}
    onKeyDown={toggleDrawer(anchor, false)}
   

    >
    
      <div className='text-center'>
  
  
     
          <div className=''>
          <header className='text-[20px]'>
      
     
        
      
          <nav className='flex flex-col gap-[1  0px]'>
          <Link  to="/">{t('Home')}</Link>
      <Link  to="/About">{t('About')}</Link>
      <Link  to="/Services">{t('Services')}</Link>
      <Link  to="/Gallery">{t('Gallery')}</Link>
      <Link  to="/Contact">{t('Contact')}</Link>
      <Link  to="/Story">{t('Story')}</Link>
      <Link  to="/Careers">{t('Careers')}</Link>
      <Link  to="/News">{t('News')}</Link>
      <Link to="/Save">{t('Save')}</Link>
      <Link to="/games">{t('Game')}</Link>
            <IconButton ><TranslateIcon></TranslateIcon><span style={{color :active == "en" ?"red":""}} onClick={() => changeLanguage("en") } className='text-[gray]'  >en</span></IconButton>
            <IconButton><TranslateIcon></TranslateIcon><span style={{color: active =="ru"?"Red":""}} onClick={() => changeLanguage("ru")} className='text-[gray]' >ru</span></IconButton>
          </nav>
     
        <div className=''>
          <DarkModeToggle/>
        </div>
      </header>
       
           
          </div>
        </div>
      
      

  



    </Box>
  );
  

  return (
    <div className=''>
{['right'].map((anchor) => (
  <React.Fragment key={anchor}>
    <Button onClick={toggleDrawer(anchor, true)}>
      <IconButton>
        <MenuIcon style={{ color: 'white' }}>{anchor}</MenuIcon>
      </IconButton>
    </Button>
    <Drawer
      anchor={anchor}
      open={state[anchor]}
      onClose={toggleDrawer(anchor, false)}
    >
      {list(anchor)}
    </Drawer>
  </React.Fragment>
))}
    </div>
  );
}