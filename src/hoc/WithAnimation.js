import React, { useEffect } from "react"
import { gsap, Expo, Power3 } from "gsap"

const WithAnimation = ({children}) => {
  
  useEffect(() => {
    gsap.from(".logo", {
      duration: 1,
      opacity: 0,
      x: -20,
      ease: Expo.easeInOut
    })

    gsap.from(".menu-links ul li", {
      duration: 1,
      opacity: 0,
      x: -20,
      ease: Power3.easeInOut
    }, 0.08)

    gsap.from(".search", {
      duration: 1,
      delay: .5,
      opacity: 0,
      x: -20,
      ease: Expo.easeInOut
    })

    gsap.from(".account", {
      duration: 1,
      delay: .6,
      opacity: 0,
      x: -20,
      ease: Expo.easeInOut
    })

    gsap.from(".cart",{
      duration: 1,
      delay: .7,
      opacity: 0,
      x: -20,
      ease: Expo.easeInOut
    })

    gsap.from(".juice",{
      duration: 1,
      delay: 2,
      opacity: 0,
      y: -800,
      ease: Expo.easeInOut
    })

    gsap.from(".leaves .layer:nth-child(1)", {
      duration: 2,
      delay: 2,
      opacity: 0,
      y: -800,
      ease: Expo.easeInOut
    })

    gsap.from(".leaves .layer:nth-child(2)", {
      duration: 2,
      delay: 2.1,
      opacity: 0,
      y: -800,
      ease: Expo.easeInOut
    })

    gsap.from(".leaves .layer:nth-child(3)",{
      duration: 2,
      delay: 2.2,
      opacity: 0,
      y: -800,
      ease: Expo.easeInOut
    })

    gsap.from(".leaves .layer:nth-child(4)",{
      duration: 2,
      delay: 2.3,
      opacity: 0,
      y: -800,
      ease: Expo.easeInOut
    })

    gsap.from(".leaves .layer:nth-child(5)",{
      duration: 2,
      delay: 2.5,
      opacity: 0,
      y: -800,
      ease: Expo.easeInOut
    })

    gsap.from(".title",{
      duration: 1,
      delay: 1,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
    })

    gsap.from(".tagline",{
      duration: 1,
      delay: 1.3,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
    })

    gsap.from(".pages",{
      duration: 1,
      delay: 1.3,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
    })

    gsap.from(".more",{
      duration: 1,
      delay: 1.4,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
    })

    gsap.from(".desc",{
      duration: 1,
      delay: 1.4,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
    })

    gsap.from(".arrows",{
      duration: 1,
      delay: 2,
      opacity: 0,
      ease: Expo.easeInOut
    })
  }, [])  

  return (
    <>
      {children}
    </>
  )
}

export default WithAnimation