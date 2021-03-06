import React, {useState, useEffect} from 'react';
import '../public/styles/css/values.css';
// import '/assets/icons/values-down-arrow.png' from '/assets/icons/values-down-arrow.png'
import {ValuesHeader} from '../components/header2'

const Values = ()=>{
  
  const [loadStatus, setLoad] = useState('no')
  const [counter, setCounter] = useState(0)
  const [touchStartPoint, setTouchStartPoint] = useState(0);
  const title = ['diligence', 'joy', 'service', 'courage', 'receptivity'];
  const text = [
    'If doing something, do it all the way.',
    'We try to focus on the pleasant elements.',
    'Let’s empathize with the experiences of others, and help out where we can.',
    'Though the future is ours to shape, we acknowledge the present as it is.',
    'Only by embracing the unknown are we free to find solutions we can’t initially imagine.',
  ];

  const nextValue = ()=>{
    shrinkContent();
    setTimeout(()=>{setCounter(counter + 1)}, 500)
  }
  const prevValue = ()=>{
    shrinkContent();
    setTimeout(()=>{setCounter(counter - 1)}, 500)
  }

  const shrinkContent = ()=>{
      document.getElementById('value-text-div').style.width = 0;
      document.getElementById('value-text').style.bottom = '10px';
      document.getElementById('value-text').style.opacity = 0;
      document.getElementById('value-title').style.opacity = 0;  
  }
  
  const readWheel = (e)=>{
    if(document.getElementById('value-title')){
      if(e.deltaY > 0 && counter <= 3){
          nextValue();
          window.removeEventListener('wheel', readWheel);
        }  
      else if(e.deltaY < 0 && counter >= 1){
        prevValue();
        window.removeEventListener('wheel', readWheel);
      }}
  }

  const readSwipe = (e)=>{
    // setTimeout(()=>{
      window.removeEventListener('touchend', readSwipe)
      if(e.changedTouches[0].screenY < touchStartPoint - 0 && counter <= 3){
        nextValue();
      }  
      else if(e.changedTouches[0].screenY > touchStartPoint + 0 && counter >= 1){
        prevValue();
      }  
  }
  const touchStart = (e)=>{ setTouchStartPoint(e.changedTouches[0].clientY); }
  const keyReaders = (e)=>{
    window.removeEventListener('keyup', keyReaders);
    if(e.keyCode === 40 && counter <= 3 ){ nextValue() }
    else if(e.keyCode === 38 && counter >= 1){ prevValue() }
  }

  useEffect(()=>{
    

    document.getElementById('value-title').style.opacity = 1;
    document.getElementById('value-text').style.opacity = 1;
    document.getElementById('value-text-div').style.width = '92%';
    document.getElementById('value-text').style.bottom = '0px';
    // 1. On render or state change, styles of changing content are set.

    
    
    window.removeEventListener('wheel', readWheel)    
    window.removeEventListener('touchend', readSwipe);
    window.removeEventListener('touchstart', touchStart);
    window.removeEventListener('keyup', keyReaders);
    document.getElementById('down-arrow').removeEventListener('click', nextValue);
    
    setTimeout(()=>{
      window.addEventListener('wheel', readWheel)    
    }, 1250)
    // 2. After 1.5s, wheel event listener is added to the window.
    window.addEventListener('touchend', readSwipe);
    window.addEventListener('touchstart', touchStart);
    window.addEventListener('keyup', keyReaders);
    document.getElementById('down-arrow').addEventListener('click', nextValue);
  })
  
  // if(loadStatus === 'no'){
  //   return (
  //     <div style={{height:'100vh', width:'100vw', background:'linear-gradient(#212121, #3D3D3D)'}}><h1>loading</h1></div>
  //   )
  // }
  
  return(
    <div id='page_value' className='page' >
      <ValuesHeader />
      <div id='value-con'>
        <div id='title-and-text'>
          <h1 id='value-title'>{title[counter]}</h1>
          <div id='value-text-div'><p id='value-text'>{text[counter]}</p></div>
        </div>
        <div id='counterAndArrow'>
          <h4 id='value-counter'>{`0${counter + 1}`}/05</h4>
          <img src={'/assets/icons/values-down-arrow.png'} id='down-arrow' />
        </div>
      </div>
    </div>
  )
}

export default Values;