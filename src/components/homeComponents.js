import React, {useState, useEffect, useCallback} from 'react';
// import '../../styles/home/aboveFold.css';
import '../styles/css/home.css';
import { HashRouter, Switch, Link, Route, Redirect } from "react-router-dom";

import Experiences from '../assets/icons/campaign.png';
import Data from '../assets/icons/report.png';
import Performance from '../assets/icons/speed.png';

import art from '../assets/images/cover.jpeg'
import bill_back from '../assets/images/bill-background.jpeg'
import studio from '../assets/images/studio.png'
import puddle from '../assets/images/puddle.jpeg'
import bill_logo from '../assets/icons/bill.png'


export const AboveFold = (props)=>{
  
  const topSpace = window.pageYOffset;
  
  const [arrowOpacity, setArrowOpacity] = useState((topSpace < 5) ? 1 : 0);
  const [titleOpacity, setTitleOpacity] = useState((topSpace < 5 ) ? 1 : .1);
  const [state, setState] = useState(1);
  
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      if (window.pageYOffset < 5){
        setArrowOpacity(1);
        setTitleOpacity(1);
      }
      else{
        setArrowOpacity(0);
        setTitleOpacity(.1);
      }
    })
    window.addEventListener('resize',()=>{
      setState(state + 1)
    })
  })

  return(
    <div id='above-fold' style={{display: 'flex'}}>
        <h4 className='home-header'>HEY, WE'RE ETHE.</h4>
        <h1 id='above-title' style={{opacity: titleOpacity}}>We <span id='team-up'>team up</span> with <span id='creatives'>creatives</span> to make meaningful digital <span id='dig-exp'>experiences</span></h1>
    </div>
  )
}


export const Services = ()=>{
  const [servicesOpacity, setOpacity] = useState(.18)
  
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      (window.pageYOffset > 5 && window.pageYOffset < 500) ? setOpacity(1) : setOpacity(.18)
    })
  })

  const Service = (props)=>{
    return(
      <div className='service'>
        <img src={props.img}/>
        <div className='service-text'>
            <h3 className='service-header'>{props.title}</h3>
            <p className='service-para'>{props.description}</p>
        </div>
    </div>
    )
  }

  return(
    <div id='services' style={{opacity: servicesOpacity}}>
      <Service img={Experiences} title={'Crafting digital experiences'} description={'We aim to associate your brand with joy in the minds of users.'}/>
      <Service img={Data} title={'Finding knowledge in data'} description={'Data adds science to your art, taking you from guesswork to informed decisions.'}/>
      <Service img={Performance} title={'Improving through strategy'} description={'We analyze performance to enhance the experience further.'}/>
    </div>
  )
}


export const Projects = ()=>{
  
  const [stateOpacity, setOpacity] = useState(.18)
  
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      (document.getElementById('projects') && window.pageYOffset > 3 && window.pageYOffset < document.getElementById('projects').offsetTop + 100) ? setOpacity(1) : setOpacity(.18)
    })
  })
    const Project = (props) =>{
      return(

        <div className='project' style={{backgroundImage: `url(${props.background})`, color: props.textColor }}>
          <a href={props.link} target='_blank'>
            <div className='overlay' style={{background:`linear-gradient(359deg, ${props.color1}, ${props.color2})`}}>
              <img className='logo' src={props.logo}></img>
              <h4 className='tagline' style={{color: props.textColor}}>{props.tagline}</h4>
            </div>
          </a>
        </div>
      )
    }
    
    return(
      <div id='projects' style={{opacity:stateOpacity}}>
        <h4 className='home-header'>CLIENT WORK</h4>
        <div id='project-container'>
          <div className='project' style={{backgroundImage: `url(${bill_back})`, color: '#FFFFFFC4' }}>
            <a href='https://lynjackson.github.io/bill_page'>
              <div className='overlay' style={{background:`linear-gradient(359deg, ${'#000000B2'}, ${'#00000014'})`}}>
                <img className='logo' src={bill_logo}></img>
                <h4 className='tagline' style={{color: '#FFFFFFC4'}}>{'A better way to order'}</h4>
              </div>
            </a>
          </div>            
            <Project background={art} logo={studio} tagline={'The creative space'} color1={'#FFFFFFC4'} color2={'#FFFFFF14'} textColor={'#000000B2'} link={'https://studio.ljoconnor5.now.sh/'}></Project>
        </div>
      </div>
    )
  }

export const Vision = () =>{
  const [state, stateRefresh] = useState(0)
  const [stateOpacity, setOpacity] = useState(.18)
  
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      (document.getElementById('vision') && window.pageYOffset > document.getElementById('vision').offsetTop - 423) ? setOpacity(1) : setOpacity(.18)
    })
    window.addEventListener('resize', ()=>{stateRefresh(state + 1)})
  })

  
  
  return(
    <div id='vision' style={{opacity: stateOpacity}}>
      <h4 className='home-header'>WE THINK</h4>
      
       {(window.innerWidth <1024) ?
        <div id='vision-content'>  
          <h1 id='vision-title'>Every interaction is a chance to captivate.</h1>
          <div id='vision-image' src={puddle}></div>
          <p id='vision-text'>Customers remember how you make them feel. They expect intuitive products with useful information and capability. Our products aim to deliver in a way that maximizes positive feelings, which clients then associate with your brand.</p>
        </div>
        :
        <div id='vision-content'>
          <div id='titleAndText'>
            <h1 id='vision-title'>Every interaction is a chance to captivate.</h1>
            <p id='vision-text'>Customers remember how you make them feel. They expect intuitive products with useful information and capability. Our products aim to deliver in a way that maximizes positive feelings, which clients then associate with your brand.</p>
          </div>
          <div id='vision-image' src={puddle}></div>
        </div>
      }

      <Link to='/ethe_design/values' className='nav-option'><h4 className='home-header' id='more-values'>MORE VALUES</h4></Link>
      {/* <div id='sec1-image-div'></div> */}
    </div>
  )
}
