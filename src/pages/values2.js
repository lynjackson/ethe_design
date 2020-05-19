import React, {useState, useEffect} from 'react';
import '../styles/css/values.css';
import DownArrow from '../assets/icons/values-down-arrow.png'
import {ValuesHeader} from '../components/header'

const Values = ()=>{
  
  const title = ['Openness', 'Service', 'Evaluation', 'experience', 'renounce', 'enjoy', 'diligence'];
  const text = [
    'Only by embracing the unknown and staying open are we free to find solutions we can’t initially imagine.',
    'We try to empathize with the experiences of others, and help out where we can.',
    'We regularly assess the productive value of things and adjust accordingly. We’re not that cool with convention.',
    'Experience is all we really have. We don’t take our’s or others’ lightly.',
    'We live for the process more than the result. And somehow, the result is usually better for it.',
    'We try to find joy in whatever we do.',
    'If something is worth doing, its worth doing wholeheartedly.'
  ];
  
  const [counter, setCounter] = useState(0)
  const [touchStartPoint, setTouchStartPoint] = useState(0);
  
  
  const nextValue = ()=>{
    setCounter(counter + 1)
  }      
  
  const prevValue = ()=>{
    setCounter(counter - 1)
  } 
  
  const readWheel = (e)=>{
    
    if(document.getElementById('value-title')){
      
      window.removeEventListener('wheel', readWheel);
      
    if(e.deltaY > 0 && counter <= 5){
        document.getElementById('value-text-div').style.width = 0;
        document.getElementById('value-text').style.bottom = '10px';
        document.getElementById('value-text').style.opacity = 0;
        document.getElementById('value-title').style.opacity = 0;  
        setTimeout(()=>{ nextValue() }, 500)
      }  
      else if(e.deltaY < 0 && counter >= 1){
        document.getElementById('value-text-div').style.width = 0;
        document.getElementById('value-text').style.bottom = '10px';
        document.getElementById('value-text').style.opacity = 0;
        document.getElementById('value-title').style.opacity = 0;  
        setTimeout(()=>{ prevValue() }, 500)
      }}
  }

  const readSwipe = (e)=>{
    // setTimeout(()=>{
      window.removeEventListener('touchend', readSwipe)
      
      if(e.changedTouches[0].clientY > touchStartPoint + 100 && counter <= 5){
        document.getElementById('value-text-div').style.width = 0;
        document.getElementById('value-text').style.bottom = '10px';
        document.getElementById('value-text').style.opacity = 0;
        document.getElementById('value-title').style.opacity = 0;  
        setTimeout(()=>{ nextValue() }, 500)
      }  
      else if(e.changedTouches[0].clientY < touchStartPoint - 100 && counter >= 1){
        document.getElementById('value-text-div').style.width = 0;
        document.getElementById('value-text').style.bottom = '10px';
        document.getElementById('value-text').style.opacity = 0;
        document.getElementById('value-title').style.opacity = 0;  
        setTimeout(()=>{ prevValue() }, 500)
        // prevValue();
      }
    // }, 300)
    window.removeEventListener('touchend', readSwipe)
  }
  
useEffect(()=>{
    document.getElementById('value-title').style.opacity = 1;
    document.getElementById('value-text').style.opacity = 1;
    document.getElementById('value-text').style.bottom = '0px';
    document.getElementById('value-text-div').style.width = '500px';
    // 1. On render or state change, styles of changing content are set.
    
    setTimeout(()=>{
      window.addEventListener('wheel', readWheel)    
    }, 1500)
    // 2. After 1.25s, wheel event listener is added to the window

    window.addEventListener('touchend', readSwipe);

    window.addEventListener('touchstart', (e)=>{  
      setTouchStartPoint(e.changedTouches[0].clientY);
    })
  
  })
  
  return(
    <div id='page_value' className='page' >
      <ValuesHeader />
      <div id='value-con'>
        <h1 id='value-title'>{title[counter]}</h1>
        <div id='value-text-div'><p id='value-text'>{text[counter]}</p></div>
        <div id='counterAndArrow'>
          <h4 id='value-counter'>{`0${counter + 1}`}/07</h4>
          <img src={DownArrow}  onClick={()=>{(counter <= 5) ? nextValue():console.log('nah')}}/>
        </div>
      </div>
    </div>
  )
}

export default Values;