import React from 'react';
import '../../styles/lyn/education.css'

export const Education = ()=>{
  return(
    <div id='education_lyn' className='section_lyn'>
      <div className='section-title_lyn'>
        <p style={{fontFamily: 'Poppins-Medium', fontSize:18.91, fontWeight: 500, margin: 0}}>Education</p>
        <hr />
      </div>

      <div id='schools_lyn'>
        <div className='school_lyn'>
          <p style={{margin: 0}}>University of Pennsylvania</p>
          <p className='degree_lyn'>Juris Doctor, 2015</p>
        </div>
        <div className='school_lyn'>
          <p style={{margin: 0}}>Johns Hopkins University</p>
          <p className='degree_lyn'>Bachelor of Arts, 2012</p>
        </div>
      </div>



    </div>
  )
}
