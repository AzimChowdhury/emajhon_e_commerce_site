// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCM4xITzolABK8cyZqG_t8_cPljABSuvLA",
    authDomain: "emajhon-de1ec.firebaseapp.com",
    projectId: "emajhon-de1ec",
    storageBucket: "emajhon-de1ec.appspot.com",
    messagingSenderId: "623504874805",
    appId: "1:623504874805:web:68a9ac766459c6ff39c07c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;