import React from 'react'
import MyGallery from '../components/home-components/MyGallery'
import "../components/home-components/Home.css"
import Header from "../components/navbar/Header";

function Home() {

  return (
    <div className='dp-flex'>
      <Header />
      <div className='home-container'>
        <MyGallery />
      </div>
    </div>
  )
}

export default Home