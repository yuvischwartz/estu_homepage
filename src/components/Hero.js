import React from 'react'

function Hero() {
  return (
      <>
    <div className='hero-container'>
        
            <div className={'hero-banner'}>
                <div className='hero-items'>
                   <h2 className='group1'>Students are the future <br /> and the future is now!</h2>
                   <img className={'group2'} src={'images/play-img.png'} alt=''/>
                   <div className={'group3'}>
                      <img className={'im'} src={'images/frame45.png'} alt=''/>
                      <h2 className={'pt-6'}>Less bureaucracy, <br />more practicality <br />this is Estubank!</h2>
                      <button className='hero-btn'>contact</button>
                   </div>
                </div>
            </div>
            <div className='rectangle'></div> 
    </div>
    
    </>
  )
}

export default Hero