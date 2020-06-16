import React, {useState, useEffect, useCallback} from 'react';
// import '../../styles/home/aboveFold.css';
import '../public/styles/css/home.css';
// import { HashRouter, Switch, Link, Route, Redirect } from "react-router-dom";

// import Experiences from '/assets/icons/campaign.png';
// import Data from '/assets/icons/report.png';
// import Performance from '/assets/icons/speed.png';

// import art from '/assets/images/cover.jpeg'
// import bill_back from '/assets/images/bill-background.jpeg'
// import studio from '/assets/images/studio.png'
// import puddle from '/assets/images/puddle.jpeg'
// import bill_logo from '../public/assets/icons/bill.png'


export const AboveFold = (props)=>{
  
  const topSpace = window.pageYOffset;
  
  
  const [state, setState] = useState(1);
  
  useEffect(()=>{
  setTimeout(()=>{
    window.addEventListener('scroll', ()=>{
      if (window.pageYOffset < 5){
        document.getElementById('above-title').style.opacity = 1;
      }
      else{
        document.getElementById('above-title').style.opacity = .1;
      }
    }), 3000});
    window.addEventListener('resize',()=>{
      setState(state + 1)
    })

  })

  return(
    <div id='above-fold' style={{display: 'flex'}}>
        <h4 className='home-header'>HEY, WE'RE ETHE.</h4>
        <h1 id='above-title'>We <span id='team-up'>team up</span> with <span id='creatives'>creatives</span> to make meaningful digital <span id='dig-exp'>experiences</span></h1>
    </div>
  )
}


export const Services = ()=>{
  // const [servicesOpacity, setOpacity] = useState(.18)
  
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      (window.pageYOffset > 5 && window.pageYOffset < 500) ? document.getElementById('services').style.opacity = 1 : document.getElementById('services').style.opacity = .18
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
    <div id='services' style={{opacity: .18}}>
      <Service img={'/assets/icons/campaign.png'} title={'Crafting digital experiences'} description={'We aim to associate your brand with joy in the minds of users.'}/>
      <Service img={'/assets/icons/report.png'} title={'Finding knowledge in data'} description={'Data adds science to your art, taking you from guesswork to informed decisions.'}/>
      <Service img={'/assets/icons/speed.png'} title={'Improving through strategy'} description={'We analyze performance to enhance the experience further.'}/>
    </div>
  )
}


export const Projects = ()=>{
  
  // const [stateOpacity, setOpacity] = useState(.18)
  
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      (document.getElementById('projects') && window.pageYOffset > 3 && window.pageYOffset < document.getElementById('projects').offsetTop + 100) ? document.getElementById('project-container').style.opacity = 1 : document.getElementById('project-container').style.opacity = .19
    })
    document.getElementById('project-container').style.opacity=.18;
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
      <div id='projects' >
        <h4 className='home-header'>CLIENT WORK</h4>
        <div id='project-container'>
          <div className='project' style={{backgroundImage: `url(${'/assets/images/bill-background.jpeg'})`, color: '#FFFFFFC4' }}>
            <a href='https://lynjackson.github.io/bill_page' target='_blank'>
              <div className='overlay' style={{background:`linear-gradient(359deg, ${'#000000B2'}, ${'#00000014'})`}}>
                <img className='logo' src={'/assets/icons/bill.png'}></img>
                <h4 className='tagline' style={{color: '#FFFFFFC4'}}>{'A better way to order'}</h4>
              </div>
            </a>
          </div>            
            <Project background={'/assets/images/cover.jpeg'} logo={'/assets/images/studio.png'} tagline={'The creative space'} color1={'#FFFFFFC4'} color2={'#FFFFFF14'} textColor={'#000000B2'} link={'https://ptstudio.ljoconnor5.now.sh/'}></Project>
        </div>
      </div>
    )
  }

export const Vision = () =>{
  const [state, stateRefresh] = useState(0)
  // const [stateOpacity, setOpacity] = useState(.18)
  
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      (document.getElementById('vision') && window.pageYOffset > document.getElementById('vision').offsetTop - 423) ? document.getElementById('vision').style.opacity = 1 : document.getElementById('vision').style.opacity = .18
    })
    window.addEventListener('resize', ()=>{stateRefresh(state + 1)})
  })

  
  
  return(
    <div id='vision' style={{opacity: .18}}>
      <h4 className='home-header'>WE THINK</h4>
      
       {(window.innerWidth <1024) ?
        <div id='vision-content'>  
          <h1 id='vision-title'>Every interaction is a chance to captivate.</h1>
          <div id='vision-image' src={'/assets/images/puddle.jpeg'}></div>
          <p id='vision-text'>Customers remember how you make them feel. They expect intuitive products with useful information and capability. Our products aim to deliver in a way that maximizes positive feelings, which clients then associate with your brand.</p>
        </div>
        :
        <div id='vision-content'>
          <div id='titleAndText'>
            <h1 id='vision-title'>Every interaction is a chance to captivate.</h1>
            <p id='vision-text'>Customers remember how you make them feel. They expect intuitive products with useful information and capability. Our products aim to deliver in a way that maximizes positive feelings, which clients then associate with your brand.</p>
          </div>
          <div id='vision-image' src={'/assets/images/puddle.jpeg'}></div>
        </div>
      }

      <a href='/ethe_design/values' className='nav-option'><h4 className='home-header' id='more-values'>MORE VALUES</h4></a>
      {/* <div id='sec1-image-div'></div> */}
    </div>
  )
}

