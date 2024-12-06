import React from 'react'
import { HeroSection } from './components/HeroSection'
import { Card } from './components/Card'

const page = () => {
  return (
    <>
     <section className='container mx-auto'>
      <HeroSection />
      <Card />
     </section>
    </>
  )
}

export default page

