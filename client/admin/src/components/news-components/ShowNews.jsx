import React from 'react'
import moment from 'moment';
import { BsTrash } from 'react-icons/bs'
import toast, { Toaster } from 'react-hot-toast';
import imageNews from '../../assets/palinka.jpg'
import axiosInstance from '../../contexts/axiosInstance';
import Cookies from 'js-cookie';

function ShowNews({ newData, lekert, setLekert, image }) {

    const handleDelete = (id) => {
        const token = Cookies.get('token');

        if (!token) {
            console.error("Hiányzó token a localStorage-ból");
            return;
        }

        axiosInstance.delete(`/news/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((response) => {
            setLekert(!lekert);
            toast.success("Sikeres törlés!");
        }).catch((error) => {
            console.error("Hiba történt a törlés során:", error);
            toast.error("Hiba történt a törlés során");
        });
    };


    return (
        <div className='news-container'>
            <div className='news-main-container'>
                <div className='news-main-content'>
                    <div className='news-main-header'>
                        <div className="news-title">
                            <span>{moment(newData.temadatum).format('YYYY.MM.DD.')}</span>
                            <h2>{newData.temacim}</h2>
                        </div>
                        <Toaster
                            position="top-center"
                            reverseOrder={false}
                        />
                    </div>
                    <p>{newData.temaleiras}</p>
                    <div className="delete-news" onClick={() => handleDelete(newData.id)}>
                        <span>{<BsTrash />}</span>
                        <span>Hír törlése</span>
                    </div>
                </div>
                <div className='news-main-image'>
                    <img src={imageNews} alt="kép" />
                </div>
            </div>
        </div>

    )
}

export default ShowNews