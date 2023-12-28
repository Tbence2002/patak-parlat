import React, { useState } from 'react'
import "./Members.css"
import toast, { Toaster } from 'react-hot-toast'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { motion } from 'framer-motion'
import axiosInstance from '../../contexts/axiosInstance';
import Cookies from 'js-cookie';

function NewMembers({ setLekert, lekert }) {
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleSubmit = () => {
        if (name === "" || position === "" || phoneNumber === "") {
            toast.error("Ne hagyjon üres mezőt!");
            return;
        }

        const token = Cookies.get('pgjAHoJCdDA');

        if (!token) {
            console.error("Hiányzó token a localStorage-ból");
            return;
        }

        axiosInstance.post("/member", {
            name: name,
            position: position,
            phonenumber: phoneNumber,
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((response) => {
            if (response.data.error) {
                console.log("Hiba");
                toast.error("Hiba történt a hozzáadás során");
            } else {
                setLekert(!lekert);
                toast.success('Sikeres hozzáadás!');
                console.log("Siker");
            }
        }).catch((error) => {
            console.error("Hiba történt a hozzáadás során:", error);
            toast.error("Hiba történt a hozzáadás során");
        });
    };
    return (
        <motion.div className='members-container'>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <motion.div className='members-content'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                transition={{ duration: 0.3 }}
                variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 }
                }}>
                <div className='members-info'>
                    <h1>Adja meg a cég tagjait!</h1>
                    <div className='members-info-list'>
                        <AiOutlinePlus />
                        <p>Tud hozzáadni új személyeket, dolgozókat.</p>
                    </div>
                    <div className='members-info-list'>
                        <AiOutlineMinus />
                        <p>A hozzáadott személyeket tudja törölni.</p>
                    </div>
                </div>
                <div className='add-members'>
                    <div className='boxes'>
                        <input type='text' onChange={(e) => setName(e.target.value)} name="name" required />
                        <label for="name">Név</label>
                    </div>
                    <div className='boxes'>
                        <input tpe="text" onChange={(e) => setPosition(e.target.value)} name="position" required />
                        <label for="position">Tisztség</label>
                    </div>
                    <div className='boxes'>
                        <input type="text" onChange={(e) => setPhoneNumber(e.target.value)} name="phonenumber" required />
                        <label for="phonenumber">Telefonszám</label>
                    </div>
                    <div className='btn'>
                        <button onClick={handleSubmit}>Hozzáadás</button>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default NewMembers