import React, {useState, useEffect, useLayoutEffect, useCallback} from 'react';
import '../public/styles/css/header2.css';
// import { HashRouter, Switch, Link, Route, Redirect } from "react-router-dom";
// import ethey from 'assets/icons/header/logo-semibold.png';
// import menuButton from 'assets/icons/header/menu.png'
// import closeX from 'assets/icons/header/closeX.png'
// import plus from '../assets/images/plus-sign.png';


export const Header = (props)=>{
  
  //component variables
  const menuOpen = { height: '100vh', background: 'linear-gradient(#212121, #3D3D3D)', logo: props.logo}
  const defaultHeader = { height: 58.67, background: props.headerBackground, paddingTop: props.paddingTop, logo: props.logoImage}

  const MenuButtonStyle = { display:'flex', width:26.63, height: 17.08, zIndex: 100 }
  const closeXStyle = { display:'flex', width:18.83, height: 19.29, zIndex: 100 }

  //component state(s)
  const [navOpStyle, setNavOpStyle] = useState({
    display: 'none',
    opacity: 0
  });
  
  const [headerStyle, setHeaderStyle] = useState({
    height: 58.67,
    paddingTop: props.paddingTop,
    background: props.headerBackground,
    logo: props.logoImage
  });
  
  const [menuOption, changeMenuOption] = useState({
    // icon: 'assets/icons/header/menu.png',
    icon: props.menuIcon,
    style:{ display:'flex', width:26.63, height: 17.08, zIndex: 100 }
  });
  
  
  //DOM work
  useEffect(()=>{
    document.getElementById('header').addEventListener('wheel', (e)=>{
      if(headerStyle.height === '100vh'){ e.preventDefault() }
    }, {passive: true});
    
    window.addEventListener('scroll', ()=>{
      (window.pageYOffset > 5 && document.getElementById('above-fold')) ? document.getElementById('logo2').style.opacity = 0: document.getElementById('logo2').style.opacity = 1;
    })
  })
  
  //rendered content
  return (
    <div id='header' style={headerStyle}>
      <div id='header-items2' >
        
      <a href='/'><img src={headerStyle.logo} id='logo2'/></a>
        
        <img src={menuOption.icon} style={menuOption.style} onClick={()=>{
          if(headerStyle.height === 58.67){
            setHeaderStyle(menuOpen);
            setNavOpStyle({display:'flex', opacity:0});
            setTimeout(()=>{setNavOpStyle({opacity:1}); changeMenuOption({icon: 'assets/icons/header/closeX.png', style: closeXStyle})}, 250)
         }
         else{
          setHeaderStyle(defaultHeader)
          setNavOpStyle({ display:'none', opacity:0 });
          changeMenuOption({icon: props.menuIcon, style: MenuButtonStyle});
         }
        }}/>
      </div>
      
      <div id='nav-options' style={navOpStyle}>
        <a href='/lyn' className='nav-option'><h2>creator</h2></a>
        <hr id='divider' style={{borderWidth:1, borderColor:'#A3A3A3', width:'100%'}}/>
        <a href='/values2' className='nav-option'><h2>values</h2></a>
      </div>
    
    </div>
  )
}

export const HomeHeader = ()=>{
  return(
    <Header logoImage='/assets/icons/header/logo-black.png' menuIcon='assets/icons/header/menu-black.png' headerItemsJustifyContent='space-between' headerBackground='rgba(0,0,0,0)' logo={(window.location.pathname === '/')?'/assets/icons/header/logo-white.png':props.logoImage}/>
  )
}

export const ValuesHeader = ()=>{
  return(
    <Header logoImage='/assets/icons/header/logo-white.png' menuIcon='assets/icons/header/menu-white.png' logoDisplay='flex' headerItemsJustifyContent='space-between' headerBackground='rgba(0,0,0,0)' logo='/assets/icons/header/logo-white.png'/>
  )
}

export const LynHeader = ()=>{
  return(
    <Header logoImage='/assets/icons/header/logo-white.png' menuIcon='assets/icons/header/menu-white.png' logoDisplay='flex' paddingTop={22} headerItemsJustifyContent='space-between' headerBackground='linear-gradient(#212121, #3D3D3D)' logo='/assets/icons/header/logo-white.png'/>
  )
}
