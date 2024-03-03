import "./LoginScreens.css"
import React ,{useState}  from 'react'
import SignUpscreen from "./SignUpscreen";

function Loginscreens() {
  const [signIn, setSignIn]=useState(false);
  return (
    <div className='loginscreen'>
      <div className="loginscreen_background">

        <img className="loginscreen__logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
      
         <button onClick={() => setSignIn(true)} className='loginscreen_button'>Sign In</button>
         <div className='loginscreen_gradient'/>
      </div>


      <div className="loginscreen_body">
        {signIn ? (
          <SignUpscreen />
        ):(  <><h1>Unlimated Films,TV programs and 
          More.</h1>
          
          <h2> Watch Less , Learn More ,Live More.</h2>
  
          <h3> Ready to watch Desi Damaka the Enter your 
            Email , or cretae a account !!!.
          </h3>
          <div className="loginscreen_input">
             <form>
              <input type="email" placeholder="Email Address" />
              <button  onClick={ ()=> setSignIn(true)}  className='loginscreen_get'>Get Started</button>
  
             </form>
  
          </div>
          </>


          
        ) }
     
        </div>
    </div>
  )
}

export default Loginscreens