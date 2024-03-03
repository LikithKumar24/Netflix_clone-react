// import firebase from 'firebase';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB_X7S3_q3BUxvo4y7ijuQQ5Gf8WfcuwJY",
    authDomain: "myflix-f41a7.firebaseapp.com",
    projectId: "myflix-f41a7",
    storageBucket: "myflix-f41a7.appspot.com",
    messagingSenderId: "427835202695",
    appId: "1:427835202695:web:c82a6a1579444f1b536c22"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);

  const db = firebaseapp.firestore(); // this is the database which store the firestore

  // firebase is real time database

  const auth=firebase.auth();

  export {auth};
  export default db;