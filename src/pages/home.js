import React, {useState, useEffect, useLayoutEffect, useCallback} from 'react';
// import {OurWork, RecentProjects, ContactUs, DigitalMatters, Learn} from './main';
// import {AboveFold} from '../components/homeComponents';
import {HeaderMobile, HeaderDesktop} from '../components/header';
// import Overlay from './overlay';
// import Values from './values'
import '../styles/app.css'
// import '../styles/home/home.css';
import '../styles/css/home.css';
import '../styles/css/pages.css';
import { selectBook, overlay, menu, valueNextPage, valuePrevPage, defaultView, defaultHeader, invertHeader, menuHeader, scrollHeader, values} from '../actions/index.js'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import {Services} from '../components/homeComponents';
import {Projects, Vision, AboveFold} from '../components/homeComponents';
import {Contact} from '../components/contact';

const Home2 = (props)=>{
  
  const [loadStatus, setLoad] = useState('no')

  useEffect(()=>{
    window.onload = ()=>setLoad('yes')
    window.scrollTo(0,0);
  })

  if(loadStatus === 'no'){
    return (
      <div style={{height:'100vh', width:'100vw', backgroundColor:'green'}}><h1>loading</h1></div>
    )
  }
  
  return(
    <div id='home' className='page' style={{opacity: (loadStatus === 'yes')? 1 : 0}}>
        <AboveFold appState={props} />
        <Projects />
        <Vision />
    </div>
  )
}

export default Home2
