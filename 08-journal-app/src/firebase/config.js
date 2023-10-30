// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB2MsdgsvNJok7t0fs0P4QvQsVWV5i131M",
    authDomain: "react-cursos-98e5f.firebaseapp.com",
    projectId: "react-cursos-98e5f",
    storageBucket: "react-cursos-98e5f.appspot.com",
    messagingSenderId: "173339766136",
    appId: "1:173339766136:web:92a478e99694bfc843ac8d"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)