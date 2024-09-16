import React from 'react'
import Header from '../components/Landing/Header/Header'
import Banner from '../components/Landing/Banner/Banner'
import Round from '../components/Landing/RoundCard/RoundCard'
import Advertisement from '../components/Landing/Advertisement/Advertisement'
import Vision from '../components/Landing/Vision/Vision'
import HowItWorks from '../components/Landing/HowItWorks/HowItWorks'
import Testimonial from '../components/Landing/Testimonial/Testimonial'
import Tokenomics from '../components/Landing/Tokenomics/Tokenomics'
import Roadmap from '../components/Landing/Roadmap/Roadmap'
import Footer from '../components/Landing/Footer/Footer'
import Faq from '../components/Landing/Faq/Faq'

const Home = () => {
  return (
    <div className='relative overflow-hidden'>
      <div className='bottomLeftBg absolute top-28 2xl:top-[305px] -left-[8%]'></div>
      <div className='topRightBg absolute top-0 -right-[127px]'></div>
      <div className='bottomRightBg absolute top-[1178px] -left-[219px]'></div>
      {/* <div className='bottomLeftBgOne absolute top-[805px] -left-[811px]'></div> */}
        <Header/>
        <Banner/>
        <Round/>
        <Advertisement/>
        <Vision/>
        <HowItWorks/>
        <Testimonial/>
        <Advertisement/>
        <Tokenomics/>
        <Roadmap/>
        <Faq/>
        <Footer isMainMenu={true}/>
    </div>
  )
}

export default Home