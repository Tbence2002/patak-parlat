import React from 'react'
import "./Members.css"
import { MdDelete } from 'react-icons/md'
import toast, { Toaster } from 'react-hot-toast';
import axiosInstance from '../../contexts/axiosInstance';
import palinka from '../../assets/palinka.jpg'
import Cookies from 'js-cookie';

function ShowMembers({ member, setLekert, lekert }) {
    const handleDelete = (id) => {
        const token = Cookies.get('token');

        if (!token) {
            console.error("Hiányzó token a localStorage-ból");
            return;
        }

        axiosInstance.delete(`/member/${id}`, {
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
        <div className='members-box'>
            <div className='members-datas'>
                <div className="members-image">
                    <img src={palinka} alt="Tagok" />
                </div>
                <h2>{member.name}</h2>
                <h4>{member.position}</h4>
                <p>{member.phonenumber}</p>
            </div>
            <div className='members-options'>
                <div className='members-delete' onClick={() => handleDelete(member.id)}>
                    <MdDelete />
                    <p>Törlés</p>
                </div>
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
            </div>
        </div>
    )
}

export default ShowMembers