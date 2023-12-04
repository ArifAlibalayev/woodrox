import React from 'react'
import Furniture from '../../components/Furniture'
import './index.scss'
import Slider from '../../components/Slider'
import Features from '../../components/Features'
import SofaSection from '../../components/SofaSection'
import Blog from '../../components/BlogSection'
import Hero from '../../components/Hero'

function HomePage() {
  return (
    <main>
      <Hero></Hero>
      <Furniture></Furniture>
      <Slider></Slider>
      <Features></Features>
      <SofaSection></SofaSection>
      <Blog></Blog>
    </main>
  )
}

export default HomePage