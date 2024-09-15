import React from 'react'
import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner'
import Round from '../components/RoundCard/RoundCard'
import Advertisement from '../components/Advertisement/Advertisement'
import Vision from '../components/Vision/Vision'
import HowItWorks from '../components/HowItWorks/HowItWorks'

const Home = () => {
  return (
    <div className='relative overflow-hidden'>
      <div className='bottomLeftBg absolute top-[305px] -left-[8%]'></div>
      <div className='topRightBg absolute top-0 -right-[127px]'></div>
      <div className='bottomRightBg absolute top-[1178px] -left-[219px]'></div>
        <Header/>
        <Banner/>
        <Round/>
        <Advertisement/>
        <Vision/>
        <HowItWorks/>
    </div>
  )
}

export default Home