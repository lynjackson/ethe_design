import React, { Suspense, lazy, useEffect, useState } from 'react';
import {HeaderMobile, HeaderDesktop, LynHeader} from '../components/header2';
// import { selectBook, overlay, menu, valueNextPage, valuePrevPage, defaultView, defaultHeader, invertHeader, menuHeader, scrollHeader, values} from '../actions/index.js'
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux';
import {Profile_Mobile, Profile, Stack, Portfolio, Experience, Education, More} from '../components/lyn-components'

const Lyn2 = ()=>{
  
  // useEffect(()=>{
  //   window.removeEventListener('scroll', ()=>{
  //     (window.pageYOffset > document.getElementById('projects').offsetTop - 423) ? setOpacity(1) : setOpacity(.18)
  //   })
  // })

  const [loadStatus, setLoadStatus] = useState('no')
  
  useEffect(()=>{
    window.onload = ()=>{setLoadStatus('yes')}
    setTimeout(()=>{
      if(loadStatus === 'no'){
        setLoadStatus('yes')
      }
    }, 2000)
    document.getElementsByTagName("html")[0].style.backgroundImage = 'url(/assets/images/back_lyn.jpg)'
  })
  
  if(loadStatus === 'no'){
    return(
      <div style={{height:'100vh', width:'100vw', background:'linear-gradient(#FFFFFF, #BDBDBD)', display:'flex', flexDirection:'column', justifyContent:'center'}}>
        {/* <h1>loading</h1> */}
        <img id='triangle'width={30} src={'/assets/icons/header/triangle.png'} style={{alignSelf:'center'}} />
        {/* <div id='load-bar'></div> */}
      </div>
    )
  }
  
  return(
    <div id='page_lyn' className='page'>
      <LynHeader />
      <Profile />
      <div id='right-side'>
        <Portfolio />
        <Experience />
        <Education />
        <More />
      </div>
    </div>
  )
}

export default Lyn2;
