import React from 'react'
import './Profilescreens.css';
import Nav from '../Nav';
import { useSelector } from 'react-redux';
import {selectUser} from "../features/userSlice";
import { auth } from '../firebase';
import Plans from './Plans';
function Profilescreens() {
  const user=useSelector(selectUser)
  return (
    <div className='profilescreen'>
        <Nav />
        <div className='profilescreen_body'>
         
           <h1>Edit</h1>
            <div className="profilescreen_info" >
            <img src="https://avatarfiles.alphacoders.com/320/320993.jpg"
                alts="" />
              

            <div className='profilescreen_details'>
                
                  <h2>{ user.email }</h2>
                  <div className="profilescreenplans">
                    <h3>Plans</h3>
                    <Plans/>
                    <button onClick={() =>auth.signOut()} className='profilescrenn_signout'>Sign out</button>
                  </div>
                </div>
            </div>

        </div>
       
    </div>
  )
}

export default Profilescreens;