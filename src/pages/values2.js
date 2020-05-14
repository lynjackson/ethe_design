import React, {useState, useEffect} from 'react';
import '../styles/css/values.css';
import DownArrow from '../assets/icons/values-down-arrow.png'
import deb from 'lodash.debounce';
import thot from 'lodash.throttle';

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
    // document.getElementById('value-title').style.opacity = 0;
    // document.getElementById('value-text').style.opacity = 0;  
    
    setTimeout(()=>{
      setCounter(counter + 1)
    }, 200)
  }      
  
  const prevValue = ()=>{
    document.getElementById('value-title').style.opacity = 0;
    document.getElementById('value-text').style.opacity = 0;  
    setTimeout(()=>setCounter(counter - 1), 200)
  }      
  
useEffect(()=>{
    document.getElementById('value-title').style.opacity = 1;
    document.getElementById('value-text').style.opacity = 1;
    // 1. On render or state change, opacity of value content is set to 1
    
    const readWheel = (e)=>{
      window.removeEventListener('wheel', readWheel);
        
      if(e.deltaY > 0 && counter <= 5){
          document.getElementById('value-title').style.opacity = 0;
          document.getElementById('value-text').style.opacity = 0;  
          nextValue();
        }  
        else if(e.deltaY < 0 && counter >= 1){
          document.getElementById('value-title').style.opacity = 0;
          document.getElementById('value-text').style.opacity = 0;
          prevValue();
        }
      
      
    }

    const readSwipe = (e)=>{
      setTimeout(()=>{
        if(e.changedTouches[0].clientY > touchStartPoint + 100 && counter <= 5){
          nextValue();
        }  
        else if(e.changedTouches[0].clientY < touchStartPoint - 100 && counter >= 1){
          prevValue();
        }
      }, 300)
      window.removeEventListener('touchend', readSwipe)
    }
    
    setTimeout(()=>{
      window.addEventListener('wheel', readWheel)    
    }, 1500)
    // 2. After 1.25s, wheel event listener is added to the window

    window.addEventListener('touchstart', (e)=>{
      window.addEventListener('touchend', readSwipe)
      setTouchStartPoint(e.changedTouches[0].clientY)
    })
    
    

  })
  
  return(
    <div id='page_value' className='page' >
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