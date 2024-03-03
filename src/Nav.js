import React, { useEffect, useState } from 'react';
import "./Nav.css";
import { useNavigate } from 'react-router-dom';
function Nav() {
    const [show, handleshow] = useState(false);
    const historys  =useNavigate()

    const transtionnavbar = () => {
        if(window.scrollY > 100){ // if you scroll more than 100 on screen thenyou shoul show nav bar
            handleshow(true);
        }else{
            handleshow(false)  // so now it will not show nav bar
        }
    }


    useEffect(() =>{
        window.addEventListener("scroll",transtionnavbar);
        return () =>window.removeEventListener("scroll",transtionnavbar);

    },[]); // this means when ever we scrooll the trans function will be called
  return ( // below means that balck nav will only pop if the show varible is true
    <div className= {`nav ${show && "nav_Black"}`}>  
        <div className='nav_contents'><img 
         onClick={() => historys('/')}
         className='nav_logo'
         src="https://i.ibb.co/12n5SJd/least.png"
         alt="net flic logo"/>


        <img  
        onClick={() => historys('/profile')}
         className='nav_avatar'
         src="https://avatarfiles.alphacoders.com/320/320993.jpg"/></div>
    </div>
  )
}

export default Nav