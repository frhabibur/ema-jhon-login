// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA4X-1qRdrS3aGL8AcLY8P49mb7H_Xqc6Y",
    authDomain: "ema-jhon-simple-1bc68.firebaseapp.com",
    projectId: "ema-jhon-simple-1bc68",
    storageBucket: "ema-jhon-simple-1bc68.appspot.com",
    messagingSenderId: "988613557735",
    appId: "1:988613557735:web:15eaa5b3ce3a1cb2f41142"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth