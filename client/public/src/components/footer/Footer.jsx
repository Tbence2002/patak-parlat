import React from 'react'
import "./footer.css";
import { AiTwotonePhone } from 'react-icons/ai'
import { ImLocation2 } from "react-icons/im";
import Lottie from 'lottie-react'
import animationData from '../../assets/footer.json'

function Footer() {
    return (
        <section>
            <footer>
                <div className="footer-content">
                    <div className="footer-left">
                        <Lottie animationData={animationData} className='footer-left-animation' />
                    </div>
                    <div className="footer-right">
                            <h2>Vegye fel velünk a kapcsolatot!</h2>
                            <div className="footer-right-content">
                            <div className="telefon">
                                <div className="telefon-left">
                                    <AiTwotonePhone />
                                </div>
                                <div className="telefon-right">
                                    <p>Telefon</p>
                                    <p>06 / 20 224-2703</p>
                                </div>
                            </div>
                            <div className="email">
                                <div className="email-left">
                                <ImLocation2 />
                                </div>
                                <div className="email-right">
                                    <p>Telephely</p>
                                    <p>Sárospatak, Wesselényi 26.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    )
}

export default Footer