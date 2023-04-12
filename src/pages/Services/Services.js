import React from 'react'
import InfoSec  from '../../components/InfoSection/Infosectio'
import Pricing from '../../components/pricing/Pricing'
import {homeObjFour } from './Data'

const Home = () => {
  return (
    <>
       
      <Pricing />
      <InfoSec {...homeObjFour} />
    </>
  )
}

export default Home
