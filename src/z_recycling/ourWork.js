import React from 'react';
import PageTitle from '../flex_Components/page-title'

const OurWork = ()=>{
  return(
    <div id='ourWork-page'>

      <PageTitle message={'What We Do'}/>
      <div className='ourWork-div' id='ourWork-strategy-div'>
        <div className='ourWork-div-title'>
          <h1 className='ourWork-title'>Digital Strategy</h1>
        </div>
        <div className='ourWork-div-text' id='ourWork-strategy-text'>
            <p className='ourWork-text'>Learn how your customers interact with your brand and build strategies that maximize your customer reach and engagement.</p>
        </div>
      </div>

      <div className='ourWork-div' id='ourWork-design-div'>
        <div className='ourWork-div-title' id='ourWork-design-title'>
          <h1 className='ourWork-title'>Design / Development</h1>
        </div>
        <div className='ourWork-div-text' id='ourWork-design-text'>
          <p className='ourWork-text'>Applications, social media experiences, and marketing campaigns that extend your business's vision, culture and spirit, and make great user experience a part of your brand.</p>
        </div>
      </div>



      <div className='ourWork-div' id='ourWork-data-div'>
        <div className='ourWork-div-title' id='ourWork-data-title'>
          <h1 className='ourWork-title'>Data Integration</h1>
        </div>
        <div className='ourWork-div-text' id='ourWork-data-text'>
          <p className='ourWork-text'>Prioritize collection of useful data in designing compelling customer experiences. Adding science to the art allows you to move from guesswork to inspired predictions, using metrics and analytics to inform changes to your business. </p>
        </div>
      </div>

    </div>
  )
}

export default OurWork;
