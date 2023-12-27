import React,{useEffect, useState} from 'react'
import NewMembers from '../components/members-components/NewMembers'
import axios from 'axios'
import ShowMembers from '../components/members-components/ShowMembers';
import Header from '../components/navbar/Header';

function Members() {
  const [members, setMembers] = useState([]);
  const [lekert, setLekert] = useState(false);

  useEffect(()=> {
    axios.get("https://patak-parlat-be-production.up.railway.app/member/getAllMembers").then((response)=> {
      setMembers(response.data);
    })
  },[!lekert])

  return (
    <div className='dp-flex'>
      <Header/>
    <div className='members-container'>
      <NewMembers lekert={lekert} setLekert={setLekert}/>
    </div>
    <div className='show-members-container'>
    <h1>Tagok</h1>
    <div className='members-content-box'>
    {members.map((member)=> {
      return <ShowMembers member={member} lekert={lekert} setLekert={setLekert}/>
    })}
    </div>
    </div>
    </div>
  )
}

export default Members