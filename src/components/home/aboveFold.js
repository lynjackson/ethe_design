import React, {useState, useEffect, useCallback} from 'react';
import arrow from '../../assets/icons/header/down-arrow.png'
// import '../../styles/home/aboveFold.css';
import '../../styles/css/home.css';


export const AboveFold2 = (props)=>{
  
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
        {(window.innerWidth >= 1024) ? <div id='above-title' style={{top: (window.innerHeight /2)  - 84}}><h1 id='above-title-top' style={{opacity: titleOpacity}}>Digital products & solutions</h1><h1 id='above-title-bottom' style={{opacity: titleOpacity}}>for modern companies</h1></div> : <p id='above-title' style={{opacity: titleOpacity}}>Digital products & strategies for modern companies</p>}
        
        <div id='arrow-div' onClick={()=>{window.scrollTo({top:document.getElementById('above-fold').offsetHeight -100, behavior: 'smooth'})}}><img src={arrow} id='down-arrow' style={{width:31, height:18, opacity:arrowOpacity}} /></div>
        <div id='above-background'></div>
    </div>
  )
}


class AboveFold extends React.Component{

  render(){
    console.log(this.props);
      return(
        <div id='above-fold' style={{display: 'flex'}}>
          <h1 id='above-title' style={{transition: 'opacity 1s'}}>Digital products & strategies for modern companies.</h1>
          <div id='arrow-div' onClick={()=>{window.scrollTo({top:document.getElementById('above-fold').offsetHeight -100, behavior: 'smooth'})}}><img src={arrow} id='down-arrow' style={{width:16, height:16, opacity:(window.pageYOffset === 0)? 1: 0, transition:'opacity .5s'}} /></div>
        </div>
      )
}
componentDidMount(){

  window.addEventListener('scroll', (event)=>{
    (window.pageYOffset > 30) || document.getElementById('matters-view') ? this.props.appState.scrollHeader() : this.props.appState.defaultHeader();
  })
  window.addEventListener('scroll', (event)=>{
    (window.pageYOffset > 0) ? document.getElementById('above-title').style.opacity = .2: document.getElementById('above-title').style.opacity = 1
  })
}
}

export default AboveFold;
