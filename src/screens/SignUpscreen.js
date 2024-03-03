import React, { useRef } from 'react'
import "./SignUpScreen.css";
import {auth} from "../firebase" 

function SignUpscreen() {
      const emailRef= useRef(null);
      const passwordRef= useRef(null);



    const register = (e) => {
      
        e.preventDefault();
    
      auth.createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      ).then((authUser) =>{console.log(authUser);})
       .catch((error)=> {
        alert(error.message);
       });
    };

        const signIn= (e) => {
            e.preventDefault();

            auth.signInWithEmailAndPassword(
              emailRef.current.value,
              passwordRef.current.value
            )
            .then((authUser) =>{
              console.log(authUser);
            })
            .catch((error)=>alert(error.message));
        };

  return (
    <div className="signscreen">
     <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder='Email' type='email'/>
        <input ref={passwordRef} placeholder='Passwaord' type="password" />
        <button type='submit' onClick={signIn}> Sign In </button>

        <h4>
        <span className='signup_grey' >New to Netflix ? </span>
        <spam className="signupscreen_links" onClick={register}>sign up now.</spam>
        
        </h4>
         
        
        </form>       





    </div>
  )
}

export default SignUpscreen