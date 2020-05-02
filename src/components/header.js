import React, {useState, useEffect, useLayoutEffect, useCallback} from 'react';
import '../styles/home/home.css';
// import '../styles/css/header.css';
import '../styles/css/header2.css';
import { HashRouter, Switch, Link, Route, Redirect } from "react-router-dom";
import ethey from '../assets/icons/header/logo.png';
import menuButton from '../assets/icons/header/menu.png'
import plus from '../assets/images/plus-sign.png';


export const Header2 = ()=>{
  
  const blackish = 'rgb(26,26,26)'
  const [headerBackground, setBack] = useState((window.location.pathname === '/' && window.pageYOffset < 5) ? 'rgba(255,255,255, .2)' : blackish)
  const [logoInvert, setInvert] = useState((window.location.pathname !== '/') ? 'invert(1)' : 'invert(0)')
  const [headerHeight, setHeight] = useState(86)
  const [path, setPath] = useState(window.location.pathname);
  // ^ Setting...

  // useLayoutEffect(()=>{
  //   setBack('white');
  // }, []);
  
  useEffect(()=>{
    setPath(window.location.pathname);
    
    window.addEventListener('scroll', (e)=>{
      if (window.location.pathname==='/' && window.pageYOffset < 5){
        setBack('rgba(255,255,255, .2)')
        setInvert('invert(0)')
      }
      else{
        setBack(blackish)
        setInvert('invert(1)')
      }      
    })

    document.getElementById('header2').addEventListener('wheel', (e)=>{
      if(headerHeight === '100vh'){ e.preventDefault() }
    })
  })
  
  return (
    <div id='header2' style={{backgroundColor: (window.location.pathname === '/' && window.pageYOffset < 5 && headerBackground !== 'black') ? 'rgba(255,255,255, .2)' : blackish, height: headerHeight}}>
      
      <div id='header-items2'>
        <Link to='/'><img src={ethey} id='logo2' style={{filter: logoInvert}} /></Link>
        <img src={menuButton} id='menu2' onClick={()=>{
          
          if(headerHeight === '100vh'){
            setHeight(86);
            (window.pageYOffset < 5) ? setBack('white') : console.log('a');
            (window.pageYOffset < 5) ? setInvert('invert(0)') : console.log('a');
         }
         else{
            setHeight('100vh')
            setBack('black');
            setInvert('invert(1)')
         }
        }}/>
      </div>
      
      <div id='nav-options'>
        <Link to='/vision' className='nav-option' onClick={()=>{setHeight(86); setBack(blackish)}}>Vision</Link>
        <Link to='/values' className='nav-option' onClick={()=>{setHeight(86); setBack(blackish)}}>Values</Link>
        <Link to='/people' className='nav-option' onClick={()=>{setHeight(86); setBack(blackish)}}>People</Link>
      </div>
    </div>
  )
}