import React, {useState, useEffect} from 'react';
import '../styles/css/values.css';
import DownArrow from '../assets/icons/values-down-arrow.png'
import deb from 'lodash.debounce';
import thot from 'lodash.throttle';

export const Values = ()=>{
  
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
  const [valueTitle, setTitle] = useState(title[counter])
  const [valueText, setText] = useState(text[counter])
  const [stateChange, setStateChange] = useState(0);
  
  // useEffect(()=>{
  //   window.addEventListener('wheel', (e)=>{
  //     // setCounter(counter + 1)
  //     if (e.wheelDeltaY > 0){
  //       // setCounter(counter + 1)
  //     }
  //     else{
  //       // setCounter(counter - 1)
  //     }
  //     console.log(e);
  //   //   window.removeEventListener('wheel', ()=>{
  //   //     setCounter(counter + 1)
  //   // })
  // })
  // })

  

  

  useEffect(()=>{
    
    // document.getElementById('value-con').style.opacity = 1;
    document.getElementById('value-title').style.opacity = 1;
    document.getElementById('value-text').style.opacity = 1;
    
    const funky = (e)=>{
      // document.getElementById('value-con').style.opacity = 0;
      e.preventDefault();
      document.getElementById('value-title').style.opacity = 0;
      document.getElementById('value-text').style.opacity = 0;

      setTimeout(()=>(e.deltaY > 0) ? setCounter(counter + 1) : setCounter(counter - 1), 500)
      
      window.removeEventListener('wheel', funky)
    }
    
    setTimeout(()=>{
      window.addEventListener('wheel', funky)
    }, 1500)
    

  })
  
  return(
    <div id='page_value' >
      <div id='value-con'>
        <h3 id='value-title'>{title[counter]}</h3>
        <p id='value-text'>{text[counter]} </p>
        <h2>{`0${counter + 1}`}/07</h2>
        <img src={DownArrow} />
      </div>
    </div>
  )
}