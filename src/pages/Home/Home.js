import React from 'react'
import './home.scss';
function Home() {
  return (
    <div className='homeContainer'>
      <div className='homeText'>
        <div className='homeTag'>
            <span className='homeTagName'>SmartEdu</span> Education College
        </div>
        <div className='homeDesc'>With Landingoo responsive landing page template, you can promote your all hosting. domain and email services</div>
        <div className='homeButtons'>
            <button type = "button" className='homeButton'>Contact US</button>
            <button type = "button" className='homeButton'>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Home
