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
    <div className='relative overflow-hidden bg-gray-bg'>
      <div className='bottomLeftBg absolute top-10 lg:top-44 2xl:top-[305px] -left-[8%]'></div>
      <div className='topRightBg absolute 2xl:top-0 2xl:-right-[127px]'></div>
      <div className='bottomRightBg absolute 2xl:top-[1178px] 2xl:-left-[219px]'></div>
      <div className='tokenomicsBg absolute'></div>
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