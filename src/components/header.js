import React, {useState, useEffect, useLayoutEffect, useCallback} from 'react';
// import '../styles/home/home.css';
// import '../styles/css/header.css';
import '../styles/css/header2.css';
import { HashRouter, Switch, Link, Route, Redirect } from "react-router-dom";
import ethey from '../assets/icons/header/logo-semibold.png';
import menuButton from '../assets/icons/header/menu.png'
import plus from '../assets/images/plus-sign.png';


export const Header = ()=>{
  
  const blackish = 'rgb(26,26,26)'
  const whitish = 'rgb(244,244,244)'

  const [headerBackground, setBack] = useState((window.location.pathname === '/ethe_design' && window.pageYOffset < 5) ? 'hsla(0,0,96, 1)' : blackish)
  const [headerHeight, setHeight] = useState(58.67)
  const [stateDisplay, setStateDisplay] = useState('none')
  const [stateJustify, setStateJustify] = useState('center')
  const [statePadding, setStatePadding] = useState(0)
  const [offset, setOffset] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  console.log(screenWidth, 'screenWidth');
  
  
  useEffect(()=>{
    window.addEventListener('resize', (e)=>{
      setScreenWidth(window.innerWidth);
    })
    
    window.addEventListener('scroll', (e)=>{
      setOffset(window.pageYOffset);
      console.log(offset, 'offset')
    })
    document.getElementById('header2').addEventListener('wheel', (e)=>{
      if(headerHeight === '100vh'){ e.preventDefault() }
    })
  })
  
  return (
    <div id='header2' style={{height: headerHeight, justifyContent: stateJustify, paddingTop:statePadding, backgroundColor: (offset < 5 && headerHeight < 60 && window.location.pathname === '/ethe_design') ? whitish : blackish }}>
      <div id='header-items2' >
        <Link to='/ethe_design'><img src={ethey} id='logo2' style={{filter: (offset >=5 || headerHeight === '100vh' || window.location.pathname !== '/ethe_design') ? 'invert(1)' : 'invert(0)'}} /></Link>
        
        <img src={menuButton} style={{display: (screenWidth < 1024) ? 'flex':'none'}}  id='menu2' onClick={()=>{
          if(headerHeight === 58.67){
            setStateDisplay('flex')
            setStateJustify('flex-start')
            setStatePadding(11)
            setHeight('100vh');
         }
         else{
            setHeight(58.67)
            setStateDisplay('none')
            setTimeout(()=>{setStateJustify('center'); setStatePadding(0)}, 500)
         }
        }}/>

        <div id='nav-links' style={ (screenWidth < 1024) ? {display: 'none'}:(offset >=5 || headerHeight === '100vh' || window.location.pathname !== '/ethe_design') ? {filter:'invert(1)', display: 'flex'} : {filter:'invert(0)', display: 'flex'} }>
          <Link to='/ethe_design/values' className='nav-link'><h6 style={{fontSize:16, fontWeight:600, color:'black'}}>values</h6></Link>
          <Link to='/ethe_design/lyn' className='nav-link'><h6 style={{fontSize:16, fontWeight:600, color:'black'}}>lyn</h6></Link>  
          <Link to='/vision' className='nav-link'><h6 style={{fontSize:16, fontWeight:600, color:'black'}}>vision</h6></Link>
        </div>
      
      
      </div>
      
      <div id='nav-options' style={{display:stateDisplay}}>
        <Link to='/values' className='nav-option'  onClick={()=>{setHeight(58.67); setBack(blackish)}}><h2>Values</h2></Link>
        <Link to='/lyn' className='nav-option' onClick={()=>{setHeight(58.67); setBack(blackish)}}><h2>Lyn</h2></Link>
        <Link to='/vision' className='nav-option' onClick={()=>{setHeight(58.67); setBack(blackish)}}><h2>Vision</h2></Link>
      </div>
    
    </div>
  )
}