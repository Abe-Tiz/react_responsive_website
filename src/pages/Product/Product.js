import React from 'react'
import InfoSec  from '../../components/InfoSection/Infosectio'
import Pricing from '../../components/pricing/Pricing'
import {homeObjTwo,homeObjThree, homeObjFour } from './Data'

const Home = () => {
  return (
    <>
      <InfoSec {...homeObjTwo} />
      <InfoSec {...homeObjThree} /> 
      <Pricing />
      <InfoSec {...homeObjFour} />
    </>
  )
}

export default Home
