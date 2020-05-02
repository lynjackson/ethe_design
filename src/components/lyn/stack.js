import React from 'react';
import {StackLink} from './contact-link';
import '../../styles/lyn/stack.css';

export class Stack_Mobile extends React.Component{
  constructor(){
    super();
    this.state={
      change: 0,
    }
  }

render(){
  return (
    <div id='stack_lyn' className='section_lyn'>
      <div className='section-title_lyn'>
        <p style={{fontFamily: 'Poppins-Medium', fontSize:18.91, fontWeight: 500, margin: 0}}>Stack</p>
        <hr />
      </div>
      {(window.innerWidth < 559)? <div id='stack-icons_lyn'>
      <div className='item-row_stack' id=''>
        <StackLink text={'React'} linktype={'react'}/>
        <StackLink text={'JavaScript'} linktype={'javascript'}/>
        <StackLink text={'Webpack'} linktype={'webpack'}/>
        <StackLink text={'Nodejs'} linktype={'nodejs'}/>
      </div>
      <div className='item-row_stack' id=''>
        <StackLink text={'XD'} linktype={'xd'}/>
        <StackLink text={'Jest'} linktype={'jest'}/>
        <StackLink text={'Redux'} linktype={'redux'}/>
        <StackLink text={'Sketch'} linktype={'sketch'}/>
      </div>
      <div className='item-row_stack' id=''>
        <StackLink text={'CSS'} linktype={'css'}/>
        <StackLink text={'Typescript'} linktype={'typescript'}/>
        <StackLink text={'GraphQL'} linktype={'graphql'}/>
        <StackLink text={'Sass'} linktype={'sass'}/>
      </div>
    </div>
    :
    <div id='stack-icons_lyn'>
    <div className='item-row_stack' id=''>
      <StackLink text={'React'} linktype={'react'}/>
      <StackLink text={'JavaScript'} linktype={'javascript'}/>
      <StackLink text={'Webpack'} linktype={'webpack'}/>
      <StackLink text={'Nodejs'} linktype={'nodejs'}/>
      <StackLink text={'XD'} linktype={'xd'}/>
      <StackLink text={'Jest'} linktype={'jest'}/>
    </div>
    <div className='item-row_stack' id=''>
      <StackLink text={'Redux'} linktype={'redux'}/>
      <StackLink text={'Typescript'} linktype={'typescript'}/>
      <StackLink text={'GraphQL'} linktype={'graphql'}/>
      <StackLink text={'Sketch'} linktype={'sketch'}/>
      <StackLink text={'CSS'} linktype={'css'}/>
      <StackLink text={'Sass'} linktype={'sass'}/>
    </div>
  </div>}


    </div>
  )
}
componentDidMount(){
  window.addEventListener('resize', ()=>{
    this.setState({change:this.state.change + 1})
  })
}

}

export class Stack_Desktop extends React.Component{
  constructor(){
    super();
    this.state={
      change: 0,
    }
  }

render(){
  return (
    <div id='stack_lyn' className='section_lyn'>

      <div id='stack-icons_lyn'>
      <div className='item-row_stack' id=''>
        <StackLink type={'stack'} text={'React'} linktype={'react'}/>
        <StackLink type={'stack'} text={'JavaScript'} linktype={'javascript'}/>
        <StackLink type={'stack'} text={'Webpack'} linktype={'webpack'}/>
      </div>
      <div className='item-row_stack' id=''>
        <StackLink type={'stack'} text={'XD'} linktype={'xd'}/>
        <StackLink type={'stack'} text={'Jest'} linktype={'jest'}/>
        <StackLink type={'stack'} text={'Nodejs'} linktype={'nodejs'}/>
      </div>
      <div className='item-row_stack' id=''>
        <StackLink type={'stack'} text={'CSS'} linktype={'css'}/>
        <StackLink type={'stack'} text={'Redux'} linktype={'redux'}/>
        <StackLink type={'stack'} text={'Sketch'} linktype={'sketch'}/>

      </div>
      <div className='item-row_stack' id=''>
      <StackLink type={'stack'} text={'Sass'} linktype={'sass'}/>
      <StackLink type={'stack'} text={'Typescript'} linktype={'typescript'}/>
      <StackLink type={'stack'} text={'GraphQL'} linktype={'graphql'}/>
      </div>
    </div>





    </div>
  )
}
componentDidMount(){
  window.addEventListener('resize', ()=>{
    this.setState({change:this.state.change + 1})
  })
}

}
