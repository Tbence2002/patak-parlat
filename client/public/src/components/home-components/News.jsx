import React, { useState, useEffect } from 'react'
import "./Home.css";
import imageNews from '../../assets/palinka.jpg'
import axios from 'axios'
import moment from 'moment'
import {motion} from 'framer-motion'

function News() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios.get("https://patak-parlat-be-production.up.railway.app/news/getAllNews").then((response) => {
            setNews(response.data);
        })
    }, [])
    
    return (
        <motion.div className='news-container'>
            {news.length > 0 ? <> <h1>Aktuális híreink</h1>
            {news.map((newTopic) => {
                return <div className='news-container'>
                    <div className='news-main-container'>
                        <div className='news-main-content'>
                            <div className='news-main-header'>
                                <div className="news-title">
                                    <span>{moment(newTopic.temadatum).format('YYYY.MM.DD.')}</span>
                                    <h2>{newTopic.temacim}</h2>
                                </div>
                            </div>
                            <p>{newTopic.temaleiras}</p>
                        </div>
                        <div className='news-main-image'>
                            <img src={imageNews} alt="hírek"/>
                        </div>

                    </div>
                </div>
            })} </> : <div></div> }
            
        </motion.div>
    )
}

export default News