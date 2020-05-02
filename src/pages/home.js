import React, {useState, useEffect, useLayoutEffect, useCallback} from 'react';
// import {OurWork, RecentProjects, ContactUs, DigitalMatters, Learn} from './main';
import AboveFold, {AboveFold2} from '../components/home/aboveFold';
import {HeaderMobile, HeaderDesktop} from '../components/header';
// import Overlay from './overlay';
// import Values from './values'
import '../styles/app.css'
// import '../styles/home/home.css';
import '../styles/css/home.css';
import '../styles/css/pages.css';
import { selectBook, overlay, menu, valueNextPage, valuePrevPage, defaultView, defaultHeader, invertHeader, menuHeader, scrollHeader, values} from '../actions/index.js'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import {Services2} from '../components/home/services';
import {Projects} from '../components/home/projects';
import {Contact} from '../components/contact';




 const Home2 = (props)=>{
  
const [loadStatus, setLoad] = useState('no')

  useEffect(()=>{
    window.scrollTo(0,0);
    setLoad('yes');
  })

  return(
    <div id='home' style={{opacity: (loadStatus === 'yes')? 1 : 0}}>
            <AboveFold2 appState={props} />
            <Services2 appState={props}/>
            <Projects />
            {/* <div id='contact-breaker' style={{width:'100%', position:'relative'}}></div> */}
            <Contact message={'Get in touch'}/>
          </div>
  )
}

// export default Home2;


// class Home extends React.Component {
//   constructor(props){
//     super(props);
//     this.state={ overlay:{display:'none'}, menu: "menu", counter:0}
//   }

//   render(){
//     console.log(this.props)
//       return(
//           <div id='home'>
//             {/* {(window.innerWidth >= 1024) ? <HeaderDesktop appState={this.props}/> : <HeaderMobile appState={this.props}/>} */}
//             <AboveFold appState={this.props} />
//             <Services appState={this.props}/>
//             <Projects />
//             {/* <div id='contact-breaker' style={{width:'100%', position:'relative'}}></div> */}
//             <Contact message={'Get in touch'}/>
//           </div>
//       )
//     }

//     componentDidMount(){
//       let Lato = new FontFace('Lato', 'url(../styles/fonts/Lato2OFL/Lato-Regular.ttf)', {
//         style: 'normal',
//         weight: '400'
//       });

//       window.addEventListener('resize', ()=>{this.setState({counter: this.state.counter + 1})})

//       document.fonts.add(Lato);

//       Lato.load();

//       var http = require("http");
//       setInterval(function() {
//           http.get("http://ethe.herokuapp.com");
//       }, 300000); // every 5 minutes (300000)
//     }

//     // <Learn appState={this.props}/>

// // change={()=>{return this.setState({overlay:{display: 'flex'}, menu:"battery-charging"})}}

// }

// <Overlay display={this.state.overlay.display} appState={this.props} />

function mapStateToProps(state){
  return{ books: state.books, view: state.view, values: state.values, header: state.header }
}


function mapDispatchToProps(dispatch){
	return bindActionCreators({ selector: selectBook, overlay: overlay, valueNextPage: valueNextPage, valuePrevPage: valuePrevPage, defaultView: defaultView, defaultHeader: defaultHeader, invertHeader: invertHeader, menuHeader: menuHeader, scrollHeader: scrollHeader,  }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Home2)
