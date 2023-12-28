import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom"
import "./Login.css"
import loginimage from '../../assets/login.png'
import toast, { Toaster } from 'react-hot-toast';
import Cookies from 'js-cookie';

function Login({setIsLoggedIn}) {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    useEffect(() => {
        const token = Cookies.get('pgjAHoJCdDA'); // Így olvasod ki a sütit a .env-ből
        console.log(process.env.REACT_APP_TOKEN)
        if (token) {
          setIsLoggedIn(true);
          navigate('/');
        } else {
            setIsLoggedIn(false)
        }
      }, [setIsLoggedIn, navigate]);
    const handleLogin = () => {
        if (username === "" || password === "") {
            toast.error("Ne hagyjon üres mezőt!");
            return;
        } else {
            const data = { username: username, password: password };
            axios.post("https://patak-parlat-be-production.up.railway.app/auth/login", data).then((response) => {
                if (response.data.error) {
                } else if (response.data.user) { 
                    const loggedInUser = response.data.user;
                    const receivedJWT = response.data.jwt;
                    if (loggedInUser.username === username) {
                        setIsLoggedIn(true);
                        navigate("/")
                        Cookies.set('pgjAHoJCdDA', receivedJWT, { expires: 7});
                
                    } else {

                        toast.error("Hibás felhasználónév/jelszó!");
                    }
                } else {
                    toast.error("Hibás felhasználónév/jelszó!");
                }
            });
        }
    };

    return (
        <div className='login-wrapper'>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className='login-container'>
                <h1>Bejelentkezés</h1>
                <div className='login-boxes'>
                    <input type="text" name="username" onChange={(e) => setUsername(e.target.value)} required />
                    <label for="username">Felhasználónév</label>
                </div>
                <div className='login-boxes'>
                    <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} required />
                    <label for="password">Jelszó</label>
                </div>
                <div className='login-button'>
                    <button onClick={handleLogin}>Bejelentkezés</button>
                </div>
            </div>
            <div className='login-image'>
                <img src={loginimage} alt="loginkép" />
            </div>
        </div>
    )
}

export default Login