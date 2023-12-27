import React from 'react'
import heroimage from '../../assets/heroimage.png'
import "./Home.css";
import { motion } from "framer-motion"

function Hero() {
    return (
        <>
            <div className='hero-container'>
                <motion.div className='hero-text'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    transition={{ duration: 0.3 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}>
                    <h1>Patak-<span>Párlat</span></h1>
                    <h2><span>Sárospatak</span> városban</h2>
                    A pálinkafőzés ősi művészetébe kalauzolnék, ahol az illatos gyümölcsök <br /> és a finom párlatok összetalálkoznak.
                    A pálinkafőzés több, mint egy egyszerű technikai folyamat; <br /> ez egy hagyományokkal és szenvedéllyel átitatott mesterség. Az alapanyagok kiválasztása, <br /> az elkészítés módja és a türelem mind-mind meghatározó elemei ennek az ősi tudománynak.
                </motion.div>
                <motion.div className='hero-image'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    transition={{ duration: 0.3 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}>
                    <img src={heroimage} alt="Patak-Párlat" />
                </motion.div>
            </div>
        </>
    )
}

export default Hero