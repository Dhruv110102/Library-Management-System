import React from 'react'
import { Button } from './Button'
import './HeroSection.css';
import '../App.css';
import Backg from '../images/Background.jpeg'

function HeroSection() {
    return (
        <div className='Hero-container'>
            {/* <video src="\video\video-1.mp4" autoPlay loop muted/> */}
            <img src={Backg} alt=""/>
            <h1>STORIES AWAIT</h1>
            <p>WHAT ARE YOU WAITING FOR?</p>
            <p>Books of all themes</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'>GET STARTED</Button>
      
            </div>
        </div>
    )
}

export default HeroSection
