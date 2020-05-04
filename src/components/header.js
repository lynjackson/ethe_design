import React, {useState, useEffect, useLayoutEffect, useCallback} from 'react';
// import '../styles/home/home.css';
// import '../styles/css/header.css';
import '../styles/css/header2.css';
import { HashRouter, Switch, Link, Route, Redirect } from "react-router-dom";
import ethey from '../assets/icons/header/logo.png';
import menuButton from '../assets/icons/header/menu.png'
import plus from '../assets/images/plus-sign.png';


export const Header = ()=>{
  
  const blackish = 'rgb(26,26,26)'
  const whitish = 'rgb(244,244,244)'

  const [headerBackground, setBack] = useState((window.location.pathname === '/' && window.pageYOffset < 5) ? 'hsla(0,0,96, 1)' : blackish)
  const [headerHeight, setHeight] = useState(58.67)
  const [offset, setOffset] = useState(0);
  
  
  useEffect(()=>{
    window.addEventListener('scroll', (e)=>{
      setOffset(window.pageYOffset);
      console.log(offset, 'offset')
    })
    document.getElementById('header2').addEventListener('wheel', (e)=>{
      if(headerHeight === '100vh'){ e.preventDefault() }
    })
  })
  
  return (
    <div id='header2' style={{height: headerHeight, backgroundColor: (offset < 5 && headerHeight < 60 && window.location.pathname === '/') ? whitish : blackish }}>
      <div id='header-items2'>
        <Link to='/'><img src={ethey} id='logo2' style={{filter: (offset >=5 || headerHeight === '100vh' || window.location.pathname !== '/') ? 'invert(1)' : 'invert(0)'}} /></Link>
        
        <img src={menuButton} id='menu2' onClick={()=>{
          if(headerHeight === 58.67){
            setHeight('100vh');
         }
         else{
            setHeight(58.67)
         }
        }}/>
      </div>
      
      <div id='nav-options'>
        <Link to='/vision' className='nav-option' onClick={()=>{setHeight(58.67); setBack(blackish)}}>Vision</Link>
        <Link to='/values' className='nav-option' onClick={()=>{setHeight(58.67); setBack(blackish)}}>Values</Link>
        <Link to='/people' className='nav-option' onClick={()=>{setHeight(58.67); setBack(blackish)}}>People</Link>
      </div>
    
    </div>
  )
}