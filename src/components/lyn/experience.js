import React from 'react';
import '../../styles/lyn/experience.css';

export const Experience = ()=>{
  return(
    <div id='experience_lyn' className='section_lyn'>
      <div className='section-title_lyn'>
        <p style={{fontFamily: 'Poppins-Medium', fontSize:18.91, fontWeight: 500, margin: 0}}>Experience</p>
        <hr />
      </div>

      <div id='jobs_lyn'>

        <div className='job_lyn'>
          <div className='role-company_lyn'>
            <p className='job-title_lyn'>UI Developer</p>
            <p className='company_lyn'>Perfect Touch Studio</p>
          </div>
          <p className='job-desc_lyn'>Designed studio’s website with XD and built it with React. Used Next.js for render & Webpack for build.</p>
        </div>

        <div className='job_lyn'>
          <div className='role-company_lyn'>
            <p className='job-title_lyn'>Android Developer</p>
            <p className='company_lyn'>Bill, Inc.</p>
          </div>
          <p className='job-desc_lyn'>Created prototype of app that allows user to order + pay in a restaurant. Used React Native, Redux and Firebase. </p>
        </div>

        <div className='job_lyn'>
          <div className='role-company_lyn'>
            <p className='job-title_lyn'>Associate Attorney</p>
            <p className='company_lyn'>Jones Day</p>
          </div>
          <p className='job-desc_lyn'>Worked in teams to execute large private equity deals. Learned how to be a professional and good teammate.</p>
        </div>

      </div>



    </div>
  )
}

export const Experience_Desktop = ()=>{
  return(
    <div id='experience_lyn' className='section_lyn'>
      <div className='section-title_lyn'>
        <p style={{fontFamily: 'Poppins-Medium', fontSize:18.91, fontWeight: 500, margin: 0}}>Experience</p>
        <hr />
      </div>

      <div id='jobs_lyn'>

        <div className='job_lyn'>
          <div className='role-company_lyn'>
            <p className='job-title_lyn'>UI Developer</p>
            <p className='company_lyn'>Perfect Touch Studio</p>
          </div>
          <p className='job-desc_lyn'>Designed studio’s website with XD and built it with React. Used Next.js for render & Webpack for build.</p>
        </div>

        <div className='job_lyn'>
          <div className='role-company_lyn'>
            <p className='job-title_lyn'>Android Developer</p>
            <p className='company_lyn'>Bill, Inc.</p>
          </div>
          <p className='job-desc_lyn'>Created prototype of app that allows user to order + pay in a restaurant. Used React Native, Redux and Firebase. </p>
        </div>

        <div className='job_lyn'>
          <div className='role-company_lyn'>
            <p className='job-title_lyn'>Associate Attorney</p>
            <p className='company_lyn'>Jones Day</p>
          </div>
          <p className='job-desc_lyn'>Worked in teams to execute large private equity deals. Learned how to be a professional and good teammate.</p>
        </div>

      </div>



    </div>
  )
}
