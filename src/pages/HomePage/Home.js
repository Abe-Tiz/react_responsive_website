import React from 'react'
import InfoSec  from '../../components/InfoSection/Infosectio'
import Pricing from '../../components/pricing/Pricing'
import { homeObjOne,homeObjTwo,homeObjThree,homeObjFour } from './Data'

const Home = () => {
  return (
    <>
      <InfoSec {...homeObjOne} />
      <InfoSec {...homeObjTwo} />
      <InfoSec {...homeObjThree} />
      <Pricing />
      <InfoSec {...homeObjFour} />
    </>
  )
}

export default Home
