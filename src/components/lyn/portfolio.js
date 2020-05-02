import React from 'react';
import '../../styles/lyn/portfolio.css';



export const Portfolio_Mobile = ()=>{
  return(
    <div id='projects_lyn' className='section_lyn'>
      <div className='section-title_lyn'>
        <p style={{fontFamily: 'Poppins-Medium', fontSize:18.91, fontWeight: 500, margin: 0}}>Projects</p>
        <hr />
      </div>

      <div className='project-div_lyn'>
        <div className='project-title-text-div_lyn'>
          <a href='/' className='project-title_lyn' style={{margin: 0}}>Ethe Digital Firm Website</a>
          <p className='project-stack_lyn' style={{margin: 0}}>React, Webpack, Sass, Next.js</p>
        </div>
        <a href='https://xd.adobe.com/view/820921b9-b417-43e7-5562-1d9960ed07c7-f438/' className='design-docs_lyn' style={{alignSelf:'flex-start'}}>Design Documents</a>
      </div>

      <div className='project-div_lyn'>
        <div className='project-title-text-div_lyn'>
          <a href={(window.innerWidth < 475)? '/bill_q': '/bill_app'} className='project-title_lyn' style={{margin: 0}}>Bill Restaurant Mobile App</a>
          <p className='project-stack_lyn'style={{margin: 0}}>React, Webpack, Sass, Next.js</p>
        </div>
        <a href='https://xd.adobe.com/view/a8529c44-5189-4d5e-7f04-55226b55addc-de63/' className='design-docs_lyn' style={{alignSelf:'flex-start'}}>Design Documents</a>
      </div>

      <div className='project-div_lyn'>
        <div className='project-title-text-div_lyn'>
          <a href='studio.ljoconnor5.now.sh' className='project-title_lyn' style={{margin: 0}}>Perfect Touch Studio Website</a>
          <p className='project-stack_lyn' style={{margin: 0}}>React, Webpack, Sass, Next.js</p>
        </div>
        <a href='https://xd.adobe.com/view/5ec5c6ca-2869-4d4b-7fcc-831e9a159756-28f4/' className='design-docs_lyn' style={{alignSelf:'flex-start'}}>Design Documents</a>
      </div>

    </div>
  )
}

export const Portfolio_Desktop = ()=>{
  return(
    <div id='projects_lyn' className='section_lyn'>
      <div className='section-title_lyn'>
        <p style={{fontFamily: 'Poppins-Medium', fontSize:18.91, fontWeight: 500, margin: 0}}>Projects</p>
        <hr />
      </div>

      <div id='projects-div_lyn'>

        <div className='project-div_lyn'>
          <div className='project-title-text-div_lyn'>
            <div className='qr_portfolio' id='ethe-qr_portfolio'></div>
            <a href="/" className='project-title_lyn' style={{margin: 0}}>Ethe Digital Firm Site</a>
            <p className='project-stack_lyn' style={{margin: 0}}>React, Webpack, Sass, Next.js</p>
          </div>
          <p className='design-docs_lyn' >Design Documents</p>
        </div>

        <div className='project-div_lyn'>
          <div className='project-title-text-div_lyn'>
            <div className='qr_portfolio' id='bill-qr_portfolio'></div>
            <a href={(window.innerWidth < 475)? '/bill_q': '/bill_app'} className='project-title_lyn' style={{margin: 0}}>Bill Restaurant Mobile App</a>
            <p className='project-stack_lyn'style={{margin: 0}}>React, Webpack, Sass, Next.js</p>
          </div>
          <p className='design-docs_lyn' >Design Documents</p>
        </div>

        <div className='project-div_lyn'>
          <div className='project-title-text-div_lyn'>
            <div className='qr_portfolio' id='pt-qr_portfolio'></div>
            <a href='https://studio.ljoconnor5.now.sh' target='_blank' className='project-title_lyn' style={{margin: 0}}>Perfect Touch Studio Site</a>
            <p className='project-stack_lyn' style={{margin: 0}}>React, Webpack, Sass, Next.js</p>
          </div>
          <p className='design-docs_lyn' >Design Documents</p>
        </div>
      </div>

    </div>
  )
}
