import React from 'react';
import '../styles/contact2.css';
import littleArrow from '../assets/icons/little-arrow.png'

export const Contact = (props)=>{
  return(

      <div className='view' id='footer' style={{backgroundColor:'rgb(26,26,26)'}}>          
            <h1>Get in touch</h1>
            <div id='next-tab'>
              <hr />
              <h2>Our Vision</h2>
              <img src={littleArrow}></img>
            </div>
      </div>

  )
}
