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
                    <div className="hero-small-text">
                        <p>Több mint 10 éves tapasztalattal és elkötelezettséggel várjuk Önöket Sárospatak egyik eldugott kis zugában, ahol bérfőzéssel foglalkozunk. A Patakpárlat csapata egy olyan hely, ahol a hagyományos értékeket és a pálinkakészítés mesterségét modern felfogásban ötvözzük.</p>
                        <p>Szívünk és lelkünk a lepárlókkal felszerelt kisüstünkben dobog, ahol a bérfőzés lehetőségével kínáljuk ügyfeleinknek a tökéletes pálinka elkészítését. Minden egyes cseppet gondos odafigyeléssel és a legjobb alapanyagok felhasználásával főzünk meg.</p>
                        <p>A Patakpárlat nem csupán egy pálinkafőzdéje Sárospatak városának; itt a bérfőzés révén a minőség és a szenvedély találkozik. Fedezze fel nálunk a pálinka varázslatos világát, és élvezze a bérfőzés kényelmét, amely minden egyes cseppünkbe zártatik.</p>
                        <p>Köszönjük, hogy velünk tartanak ezen az izgalmas úton. Legyen részese Ön is a Patakpárlat bérfőzés élményének!</p>
                    </div>
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