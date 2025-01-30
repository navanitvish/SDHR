import React from 'react'
import Hero from '../../components/heroSection/HeroSec'
import DataOutcomes from './DataOutcomes'
import BuyerKnowledgeSection from './BuyerKnowledgeSection'
import IntegrationShowcase from './IntegrationShowcase'
// import TestimonialSection from './TestimonialSection'
// import Apart from './Apart'
import { Heros } from './Hero'
import FounderPage from './FounderPage'
// import FuturePlans from './FuturePlans'


const Home = () => {
  return (
    <div>
      <Hero/>
      <DataOutcomes/>
      <BuyerKnowledgeSection/>
      <IntegrationShowcase/>
     {/* <TestimonialSection/> */}
     {/* <FuturePlans/> */}
     {/* <Apart/> */}
     <FounderPage/>
     
      {/* <Heros/> */} 
    
      
    </div>
  )
}

export default Home
