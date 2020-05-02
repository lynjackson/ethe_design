import React from 'react';
import {ContactLink} from './contact-link';
// import '../../styles/lyn/profile.css';
import '../../styles/css/lyn.css';
import LynImage from '../../assets/images/lyn2.jpg';
// import ReactIcon from '../../assets/icons/react1.png';
// import WebpackIcon from '../../assets/icons/webpack1.png';
// import JSIcon from '../../assets/icons/javascript.png';
// import NodeIcon from '../../assets/icons/nodejs.jpg';
import XDIcon from '../../assets/icons/xd1.png';
// import SketchIcon from '../../assets/icons/sketch1.png';
// import NextIcon from '../../assets/icons/bulb.png';
// import ReduxIcon from '../../assets/icons/redux1.png';
// import CSSIcon from '../../assets/icons/css31.png';
// import GraphQLIcon from '../../assets/icons/graphql1.png';
// import SassIcon from '../../assets/icons/sass1.png';
// import TypescriptIcon from '../../assets/icons/typescript1.png';
import PTStudio from '../../assets/images/ptstudio.jpeg';
import Ethe from '../../assets/images/ethe.png';
import Bill from '../../assets/images/phone2.png';
import littleArrow from '../../assets/icons/little-arrow.png';

export const Profile = ()=>{
  return(
    <div id='profile' className='lyn-section'>
      <div id='profile-image'></div>
      <div id='nameTitleLocation'>
        <h1 id='name'>Lyn Jackson</h1>
        <h1 id='title'>UI Developer</h1>
        <p id='location'>Brooklyn, NY</p>
        <p id='email'>lynjacksonoconnor@gmail.com</p>
        <p id='phone'>267.243.8796</p>
      </div>
    </div>
  )
}

export const Portfolio = ()=>{
  
  const Project = (props)=>{
    return(
      <div className='project'>
          {/* <div className='portfolio-image' id='bill-image'></div> */}
          <img className='portfolio-image' src={props.image}></img>
          <div className='portfolio-info-div'>
            <h2 className='info-title'>{props.projectName}</h2>
            <h3 className='info-tech'>{props.projectTech}</h3>
            <div className='design-doc-div'><img className='xd-icon' src={XDIcon}></img><h3 className='design-doc-text'>Design Documents</h3></div>
          </div>
        </div>
    )
  }
  
  return(
    <div id='portfolio' className='lyn-section'>
      <div id='portfolio-tab' className='tab'> <h1 className='tab-title'>Portfolio</h1> <img className='little-arrow' src={littleArrow}></img> </div>
      <Project image={Bill} projectName={'Bill Android Pay App'} projectTech={'React Native, REST API , Redux, Firebase'}/>
      <Project image={Ethe} projectName={'Ethe Design Firm Site'} projectTech={'React Native, REST API , Redux, Firebase'}/>
      <Project image={PTStudio} projectName={'Perfect Touch Studio Site'} projectTech={'React Native, REST API , Redux, Firebase'}/>
    </div>
  )
}

export const Experience = (props) =>{
  
  const ExperienceItem = (props) => {
    return(
      <div className='experience-item'>
        <div className='item-stats'>
          <h2 className='title'>{props.title}</h2>
          <h1 className='place'>{props.place}</h1>
          <p className='time'>{props.time}</p>
        </div>
        <p className='description'>{props.description}</p>
      </div>
    )
  }
  
  return(
    <div className='lyn-section' id='experience'>
      <div id='portfolio-tab' className='tab'> <h1 className='tab-title'>Experience</h1> <img className='little-arrow' src={littleArrow}></img> </div>
      <ExperienceItem place='Freelance' title='UI Developer' time='Past six months' description='Working directly and closely with clients to design and create websites. I make use of an iterative human centered design process to understand each client’s vision and business, and craft it into a product. '/>
      <ExperienceItem place='Bill, Inc.' title='Mobile Developer' time="Jan '19 - May '19" description='Developed Bill, a mobile application for both iOS and Android that enables restaurant diners to place orders and pay from their mobile devices. Bill is a prototype created as part of a larger experience design process and built using React Native & Expo.'/>
      <ExperienceItem place='Jones Day' title='Legal Associate' time="Oct '15 = Jun '18" description='Facilitated large corporate transactions by coordinating review of our client’s contracts by several lawyers. Frequently served as the principal point of contact for clients. These transactions were often Learned what it means to be a professional and good teammate.'/>
    </div>
  )
}

export const Education = (props) =>{
  
  const EducationItem = (props) =>{
    return(
      <div className='education-item'>
        <h2 className='school'>{props.school}</h2>
        <h2 className='degree'>{props.degree}</h2>
      </div>
    )
  }

  return(
    <div className='lyn-section' id='education'>
      <div id='portfolio-tab' className='tab'> <h1 className='tab-title'>Education</h1> <img className='little-arrow' src={littleArrow}></img> </div>
      <EducationItem school='University of Pennsylvania' degree='Juris Doctor, 2015'/>
      <EducationItem school='Johns Hopkins University' degree='B.A., 2012'/>
    </div>
  )
}

export const More =(props) =>{
  return(
    <div className='lyn-section' id='more'>
      <div id='portfolio-tab' className='tab'> <h1 className='tab-title'>More</h1> <img className='little-arrow' src={littleArrow}></img> </div>
      <p>I am a User Interface Developer. I love designing experiences and then making them real. I believe the quality of our digital experiences is very important, and in several ways. It’s important that users find experiences intuitive, not simply because it makes them more enjoyable, but because it often makes the difference in the user actually getting what they need. It’s important from a business standpoint because customers and potential customers remember even slightly unpleasant experiences, and that alone can cause them to write a company off. So, I  like to create and improve digital experiences so that they’re in a place that users will really appreciate. </p>
      <p>I mostly create web experiences and mobile apps. I design responsive wireframes and prototypes in Adobe XD. I then adapt them in JavaScript using the React framework and other front-end technologies to create fast, intuitive stuff.</p>
      <p>I’m a student of the game when it comes to both design and development. I’m adherent to design principles and conventions, but have my opinions, if say, a convention hurts the experience. With development, my focus shifts to the developer experience. I write clean and efficient code, and am always keen to learn the latest language capabilities and technologies. I love getting better at what I do.</p>
      <p>I want to be part of a team of people who create products and experiences, and are passionate about doing so. For a few years, I worked for years as a corporate lawyer in a fast paced, often high pressure environment. I know what it is to be a professional, and a good teammate. I prioritize streamlining my workflow for myself and teammates as much as I can.</p>
      <p>Some of my other interests are summer, basketball, cooking, crashing open houses and new experiences.</p>
    </div>
  )
}



























export const Profile_Mobile = ()=>{
  return (
    <div id='profile_lyn'>
      <div id='lyn-image_lyn'></div>
      <div id='name-title-icons-div_lyn'>

        <div id='name-title-div_lyn'>
          <p id='lynjackson_lyn'>Lyn Jackson</p>
          <p id='uidev_lyn'>UI Developer</p>
          <p id='bk_lyn'>Brooklyn, NY</p>
        </div>

        <div id='contact-div_lyn'>
          <ContactLink text={'Resume'} linktype={'resume'} url='https://drive.google.com/file/d/1bBXDKf7KqYOqst2fDeztQuVxANpa61Tn/view?usp=sharing'/>
          <ContactLink text={'LinkedIn'} linktype={'linkedin'} url='https://www.linkedin.com/in/lyndon-jackson-541a5b18/'/>
          <ContactLink text={'Email'} linktype={'email'} url='mailto:ljoconnor5@gmail.com'/>
        </div>

      </div>
    </div>
  )
}



export const Profile_Desktop = ()=>{
  return (
    <div id='profile_lyn'>
      <div id='lyn-image_lyn'></div>
      <div id='name-title-icons-div_lyn'>

        <div id='name-title-div_lyn'>
          <p id='lynjackson_lyn'>Lyn Jackson</p>
          <p id='uidev_lyn'>UI Developer</p>
        </div>

        <div id='contact-div_lyn'>
          <ContactLink text={'Resume'} linktype={'resume'} url='https://drive.google.com/file/d/1bBXDKf7KqYOqst2fDeztQuVxANpa61Tn/view?usp=sharing'/>
          <ContactLink text={'LinkedIn'} linktype={'linkedin'} url='https://www.linkedin.com/in/lyndon-jackson-541a5b18/'/>
          <ContactLink text={'Email'} linktype={'email'} url='mailto:ljoconnor5@gmail.com'/>
        </div>

      </div>
    </div>
  )
}

// export const Profile = ()=>{
//   return(
//     <div id='lyn-profile'>
//       <div id='lyn-image-div'><img id='lyn-image' src={LynImage}/></div>
//       <div id='lyn-info-div'>
//         <div id='lyn-text-div'>
//           <h1>Lyn Jackson</h1>
//           <h2>UI Developer</h2>
//           <h3>Brooklyn, NY</h3>
//         </div>
//       </div>
//     </div>
//   )
// }

// export const Stack = ()=>{
 
//   const StackItem = (props)=>{
//     return(
//     <div style={{display:'flex', alignItems:'center'}}><img style={{width:31, height:31, marginRight: 16.2}} src={props.icon}/><p style={{fontFamily:'nunito sans', fontSize:13, fontWeight:700}}>{props.text}</p></div>
//     )
//   }
  
// return(
//     <div id='stack_lyn'>
//       <div className='stack-column_lyn' id='stack-left_lyn'>
//         <StackItem icon={ReactIcon} text={'React'}/>
//         <StackItem icon={WebpackIcon} text={'Webpack'}/>
//         <StackItem icon={JSIcon} text={'JavaScript'}/>
//         <StackItem icon={NodeIcon} text={'NodeJS'}/>
//         <StackItem icon={XDIcon} text={'XD'}/>
//         <StackItem icon={SketchIcon} text={'Sketch'}/>
//       </div>
//       <div className='stack-column_lyn' id='stack-right_lyn'>
//         <StackItem icon={NextIcon} text={'Next.js'}/>
//         <StackItem icon={ReduxIcon} text={'Redux'}/>
//         <StackItem icon={CSSIcon} text={'CSS'}/>
//         <StackItem icon={GraphQLIcon} text={'GraphQL'}/>
//         <StackItem icon={SassIcon} text={'Sass'}/>
//         <StackItem icon={TypescriptIcon} text={'Typescript'}/>
//       </div>
//     </div>
//   )
// }



export const Portfolio1 = (props)=>{
  
  const PortfolioItem = (props)=>{
    return(
      <div className='portfolio-item'>
        <img src={props.image}/>
        <div className='portfolio-item-text'>
          <h1>{props.title}</h1>
          <h2>{props.tech}</h2>
          <a>Design Docs</a>
        </div>
      </div>
    )
  }
  
  return(
    <div className='section-lyn' id='portfolio_lyn'>
      <h1 className='section-title_lyn' id='portfolio-title_lyn'>Portfolio</h1>  
      <PortfolioItem image={PTStudio} title='Perfect Touch Studio Site' tech='React, Webpack, Sass'/>
      <PortfolioItem image={Ethe} title='Ethe Design Site' tech='React, Redux, Webpack, Sass'/>
      <PortfolioItem image={Bill} title='Bill Restaurant Mobile App' tech='React Native, Redux, Firebase, Sass'/>
    </div>
  )
}






