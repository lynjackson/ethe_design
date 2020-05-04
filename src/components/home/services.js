import React, {useState, useEffect, useCallback} from 'react';
import '../../styles/css/home.css';
import Experiences from '../../assets/icons/campaign.png';
import Data from '../../assets/icons/report.png';
import Performance from '../../assets/icons/speed.png';


export const Services = ()=>{
  const [servicesOpacity, setOpacity] = useState(0)
  
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      (window.pageYOffset > 5) ? setOpacity(1) : setOpacity(0)
    })
  })

  return(
    <div id='services' style={{opacity: servicesOpacity}}>
      <Service img={Experiences} title={'Crafting digital experiences'} description={'We aim to associate your brand with pleasant experience in the minds of users.'}/>
      <Service img={Data} title={'Turning data into knowledge'} description={'With data, we add science to art. Information takes you from guesswork to inspired, informed decisions.'}/>
      <Service img={Performance} title={'Improving through strategy'} description={'We analyze business performance to identify improvements that may enhance the experience further.'}/>
    </div>
  )
}

export const Service = (props)=>{
  return(
    <div className='service'>
      <img src={props.img} style={{width:55}}/>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
  </div>
  )
}










