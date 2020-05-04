import React from 'react';
import '../styles/contact2.css';
import littleArrow from '../assets/icons/little-arrow.png'

export const Contact = (props)=>{
  return(
      <div id='footer' >          
          <div id='next-link'>
            <h2 id='next-text'>Our Values</h2>
            <img id='little-arrow' src={littleArrow} height={31} width={17}></img>
          </div>
      </div>

  )
}
