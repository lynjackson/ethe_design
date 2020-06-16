
import React, {useState, useEffect, useLayoutEffect, useCallback} from 'react';
import {HeaderMobile, HeaderDesktop, HomeHeader, Header} from '../components/header2';
import '../public/styles/css/app.css'
import '../public/styles/css/home.css';
import '../public/styles/css/pages.css';
// import { selectBook, overlay, menu, valueNextPage, valuePrevPage, defaultView, defaultHeader, invertHeader, menuHeader, scrollHeader, values} from '../actions/index.js'
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux';
// import {Services} from '../components/homeComponents';
import {Projects, Vision, AboveFold} from '../components/homeComponents';

const Home2 = (props)=>{
  
  const [loadStatus, setLoad] = useState('no')

  useEffect(()=>{
    window.onload = ()=> {setLoad('yes'); console.log('loaded!')};
    setTimeout(()=>{
      if(loadStatus === 'no'){
        setLoad('yes')
      }
    }, 2000)
    
    window.scrollTo(0,0);
    console.log(loadStatus, 'load')

    document.getElementsByTagName("html")[0].style.backgroundImage = 'url(/assets/images/back_home.jpg)'
  })

  if(loadStatus === 'no'){
    return (
      <div style={{height:'100vh', width:'100vw', background:'linear-gradient(#FFFFFF, #BDBDBD)', display:'flex', flexDirection:'column', justifyContent:'center'}}>
        {/* <h1>loading</h1> */}
        <img id='triangle'width={30} src={'/assets/icons/header/triangle.png'} style={{alignSelf:'center'}} />
        {/* <div id='load-bar'></div> */}
      </div>
    )
  }
  
  return(
    <div id='home' className='page' style={{opacity: (loadStatus === 'yes')? 1 : 0}}>
        <HomeHeader logoVis='hidden' headerItemsJustifyContent='flex-end'/>
        <AboveFold appState={props} />
        <Projects />
        <Vision />
    </div>
  )
}

export default Home2

