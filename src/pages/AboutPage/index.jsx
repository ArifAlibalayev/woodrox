import React from 'react'
import "./index.scss"
import "./../HomePage/index.scss"
import AboutHero from '../../components/AboutHero'
import LifeChange from '../../components/LifeChange'
import Slider from "./../../components/Slider"

function AboutPage() {
  return (
    <>
    <AboutHero></AboutHero>
    <LifeChange></LifeChange>
    <Slider></Slider>
    </>
  )
}

export default AboutPage