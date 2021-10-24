import React, { useEffect, useState } from "react"
import styled from "styled-components"


const ParallaxContainer = styled.div`
  
  width: 100vw;
  height: 100vh;
  position: relative;
  
  .layer_1 {
    position: absolute;
    top: -100px;
    left: -480px;
    transition: all 1.5s ease-in-out;
    transform: translate(${({posX}) => posX*-20}px, ${({posY}) => posY*-3}px)!important;
  }
  .layer_2 {
    position: absolute;
    top: 10px;
    left: 160px;
    transition: all 1.5s ease-in-out;
    transform: translate(${({posX}) => posX*-16}px, ${({posY}) => posY*4}px)!important;
  }
  .layer_3 {
    position: absolute;
    top: -300px;
    left: 160px;
    transition: all 1.5s ease-in-out;
    transform: translate(${({posX}) => posX*15}px, ${({posY}) => posY*5}px)!important;
  }
  .layer_4 {
    position: absolute;
    top: -10px;
    left: 320px;
    transition: all 1.5s ease-in-out;
    transform: translate(${({posX}) => posX*10}px, ${({posY}) => posY*-5}px)!important;
  }
  .layer_5 {
    position: absolute;
    top: 200px;
    left: -320px;
    transition: all 1.5s ease-in-out;
    transform: translate(${({posX}) => posX*5}px, ${({posY}) => posY*-2}px)!important;
  }
`


const WithParallax = ({children}) => {

  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);

  const parallaxHandler = e => {
      setPosX((e.clientX - window.innerWidth / 2) / 300)
      setPosY((e.clientY - window.innerWidth / 2) / 300)
  }

  return (
    <ParallaxContainer posX={posX} posY={posY} onMouseMove={parallaxHandler}>
      {children}
    </ParallaxContainer>
  )
}

export default WithParallax