import React from 'react';
import art from '../../assets/images/cover.jpeg'
import bill_back from '../../assets/images/bill-background.jpeg'
import studio from '../../assets/images/studio.png'
import bill_logo from '../../assets/icons/bill.png'
import '../../styles/home/projects.css'

export const Projects = ()=>{
  return(
    <div id='projects'>
      <Project background={bill_back} logo={bill_logo} tagline={'A better way to order'} color1={'#000000B2'} color2={'#00000014'} textColor={'#FFFFFFC4'}/>
      <Project background={art} logo={studio} tagline={'The creative space'} color1={'#FFFFFFC4'} color2={'#FFFFFF14'} textColor={'#000000B2'}/>
    </div>
  )
}

const Project = (props) =>{
  return(
    <div className='project' style={{backgroundImage: `url(${props.background})`, color: props.textColor }}>
      <div className='overlay' style={{background:`linear-gradient(359deg, ${props.color1}, ${props.color2})`}}>
        <img className='logo' src={props.logo}></img>
        <p className='tagline'>{props.tagline}</p>
      </div>
      
    </div>
  )
}
