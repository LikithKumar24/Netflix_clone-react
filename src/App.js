import React, { useEffect } from 'react';
import './App.css';
import HomeScreens from './screens/HomeScreens';
import LoginScreens from './screens/LoginScreens';
import{ BrowserRouter,Routes,Route // you could get this snippet in https://github.com/remix-run/react-router/blob/main/packages/react-router/README.md
} from "react-router-dom";
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { logout ,login, selectUser} from './features/userSlice';
import Profilescreens from './screens/Profilescreens';

function App() {

  const user=useSelector(selectUser); // this will thw user back we here using the redux
  const dispatch=useDispatch();

  useEffect(() =>{
     const unsubscribe =auth.onAuthStateChanged((userAuth) =>
      {
        if(userAuth){
          // loged in
          
          dispatch(login({
            uid:userAuth.uid,
            email:userAuth.email,

          })
          );
        }else{
          // Loged out
          dispatch(logout())
        }
      })

      return unsubscribe;
  },[]);

  

  return (
    <div className="app">
    
    

<BrowserRouter>
         
{!user ? (<LoginScreens/>):
         (
          
         <Routes>
          <Route path="/profile" element={<Profilescreens />}>

          </Route>
     <Route path="/" element={<HomeScreens />}/>
         </Routes>
        )}
    
</BrowserRouter>

</div>
  );
}

export default App;