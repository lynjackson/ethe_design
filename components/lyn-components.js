import React, {useState} from 'react';
import '../public/styles/css/lyn.css';


export const Profile = ()=>{
  
  const [height, setHeight] = useState('auto')
  
  return(
    <div id='profile' className='lyn-section' >
      <div id='image'></div>
      
      <div id='nameTitleLocation'>
        <h2 id='name'>Lyn O'Connor</h2>
        <h2 id='title' className='grey-title'>UI Developer</h2>
        {/* <h3 id='location'>Brooklyn, NY</h3> */}

        <div id='contact-div'>
          <a className='contact-link' href="mailto:ljoconnor5@gmail.com" id='email'>ljoconnor5@gmail.com</a>
          <a className='contact-link' href="tel:+2672438796" id='phone'>267.243.8796</a>
          <a className='contact-link' href='https://www.linkedin.com/in/lyndon-jackson-541a5b18/' target='_blank' id='linkedin'>LinkedIn</a>
          {/* <a className='contact-link' href='https://drive.google.com/file/d/1z4Kqu8joAprX7M2sZHaEh2q7U38I7pPA/view?usp=sharing' target='_blank' id='linkedin'>Resume</a> */}
        </div>
      
      </div>
    </div>
  )
}

export const Portfolio = ()=>{
  
  const [stateHeight, setStateHeight] = useState('auto')
  const [arrowPos, setArrowPos] = useState('rotate(0deg)')
  const [tabStyle, setTabStyle] = useState({height: 'auto', transform: 'rotate(0deg)', marginBottom: 49})

  const toggleTab = () => {
    (tabStyle.height === 'auto') ? setTabStyle({height: 69, transform: 'rotate(-90deg)', marginBottom: 0}):setTabStyle({height: 'auto', transform: 'rotate(0deg)', marginBottom: 49})
  }
  
  const Project = (props)=>{
    return(
      <div className='portfolio-project'>
          {/* <div className='portfolio-image' id='bill-image'></div> */}
          <a className='project-image-link' href={props.imageLink} target='_blank'><img className='portfolio-image' src={props.image}></img></a>
          <div className='project-info-div'>
          <a href={props.imageLink} target='_blank'><h3 className='title'>{props.projectName}</h3></a>
            <h5 className='tech'>{props.projectTech}</h5>
            <a href={props.xdLink} target='_blank'><div className='design-doc-div'><img className='xd-icon' src={'/assets/icons/lyn-page/xd-icon.png'}></img><h5 className='design-doc-text'>Design Documents</h5></div></a>
          </div>
        </div>
    )
  }
  
  return(
    <LynTab title={'Projects'}>
      <Project image={'/assets/images/ethe.png'} projectName={'Ethe Design Site'} projectTech={'Interface with React and Sass in Next.js architecture. Redux managed state. Optimized with React.lazy & Webpack.'} imageLink={'/'} xdLink={'https://xd.adobe.com/view/5c54b440-3964-4159-7353-f2eb278083b7-2a65/grid/'}/>
      <Project image={'/assets/images/phone2.png'} projectName={'Divy Mobile App'} projectTech={'Built with React Native on Expo. Fetches REST API data and uses global Redux state and Firebase database.'} imageLink={'https://lynjackson.github.io/bill_page'} xdLink={'https://xd.adobe.com/view/5ec009d3-2a06-4639-40a6-b639838c3164-28f1/grid/'}/>
      <Project image={'/assets/images/ptstudio.jpeg'} projectName={'Perfect Touch Studio Site'} projectTech={'Interface built with React and CSS from Adobe XD mockups. Next.js architecture. State managed with Redux and optimized with Webpack.'} imageLink={'https://ptstudio.ljoconnor5.now.sh/'} xdLink={'https://xd.adobe.com/view/6f8d950c-f4fb-489c-41da-49f00099f610-19bc/grid/'}/>
    </LynTab>
  )
}

export const Experience = (props) =>{
  
  const ExperienceItem = (props) => {
    return(
      <div className='experience-item'>
        <div className='item-stats'>
          <h3 className='title'>{props.title}</h3>
          <h3 className='place'>{props.place}</h3>
          <h5 className='time'>{props.time}</h5>
        </div>
        <p className='description'>{props.description}</p>
      </div>
    )
  }
  
  return(
    <LynTab title={'Experience'}>
      <ExperienceItem place='Bill, Inc.' title='UI Developer' time="09/18 - 06/20" description='Leading a team of three creating an application that allows restaurant diners to pay with mobile devices. We used a human centered design process to devise the app’s flow. I created wireframes using UI design principles and Adobe XD, then translated them into React Native syntax down to the pixel. I connected and manage the app’s REST API and Firebase database. I’m continuously learning about mobile UI design and development, and how it differs from browser focused development.'/>
      <ExperienceItem place='Freelance' title='Frontend Developer' time='07/17 - 09/18' description='I designed and built websites for several clients. For each project, I designed the interface with Adobe XD, and built the views with React. Each project was built responsively using 375px and 2560px as general outer limits. I used a variety of other technologies for each project, depending on need. These projects helped me develop a nuanced understanding of React’s lifecycle and data flow. I learned to skillfully write functional JavaScript and efficient and responsive CSS using Sass. '/>
      <ExperienceItem place='Jones Day' title='Counsel' time="10/15 - 01/18" description='I led large teams of lawyers in identifying potential legal issues and creating company snapshots for corporate transactions. Teams usually changed from deal to deal, so quickly learning to work with people was important. I usually served as a principal point of communication between my team and our clients. My experience taught me the meaning of professionalism, and the importance of owning the larger mission and being a good teammate.'/>
    </LynTab>
    
  )
}

export const Education = (props) =>{
  
  const EducationItem = (props) =>{
    return(
      <div className='education-item'>
        <h3 className='school'>{props.school}</h3>
        <h3 className='degree'>{props.degree}</h3>
      </div>
    )
  }

  return(
    <LynTab title={'Education'}>
      <EducationItem school='J.D., 2015' degree='University of Pennsylvania'/>
      <EducationItem school='B.A., 2012' degree='Johns Hopkins University'/>
    </LynTab>
  )
}

export const More =(props) =>{
  return(
    <LynTab title={'More'}>
      <p>My driving force as a developer is the idea that others might find what I make useful and delightful. An interface can give users actual joy, or cause them intense frustration. I believe we should strive for the former, not just because it endears customers to our products and brands, but because it’s our opportunity to make the world more pleasant to live in.</p>
      <p>I’m at my best when working on a team that’s committed to its mission. I thrive on the sense of accountability to my teammates and believe professionalism comes down to bringing 100% every day, good and bad. Extensive experience contributing large, time-sensitive projects has taught me to own my part, communicate well and often, and cherish opportunities to learn from those around me.</p>
      <p>I’m a disciple of both development and design, adherent to best practices in code and UI design principles. I strive for mastery of the frontend landscape, always open to new tech and creative solutions to speed up applications and implement designs with precision. I’m committed to thinking my way around problems, and try to live with a balance of openness, diligence, courage and joy. </p>
    </LynTab>
  )
}

const LynTab = (props) =>{
  
  const [stateHeight, setStateHeight] = useState('auto')
  const [arrowPos, setArrowPos] = useState('rotate(0deg)')
  const [tabStyle, setTabStyle] = useState({height: 'auto', transform: 'rotate(0deg)', marginBottom: 49})

  const toggleTab = () => {
    (tabStyle.height === 'auto') ? setTabStyle({height: 69, transform: 'rotate(-90deg)', marginBottom: 0}):setTabStyle({height: 'auto', transform: 'rotate(0deg)', marginBottom: 49})
  }
  
  return(
    <div className='lyn-section' style={{height: tabStyle.height, marginBottom: tabStyle.marginBottom}}>
      <div id='portfolio-tab' className='tab' onClick={()=>{toggleTab()}}> <h2 className='grey-title'>{props.title}</h2> <img className='little-arrow' src={'/assets/icons/dropArrow.png'} style={{transform: tabStyle.transform}}></img> </div>
      {props.children}
    </div>
  )
}
