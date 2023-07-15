// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//the database
import { getFirestore } from "firebase/firestore";
//for login authentication
import {getAuth} from 'firebase/auth';
//for storage
import {getStorage} from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDS3M_AfhDjOmCdz3ydUHtqrnP14MfljtE",
    authDomain: "elden-ring-db.firebaseapp.com",
    projectId: "elden-ring-db",
    storageBucket: "elden-ring-db.appspot.com",
    messagingSenderId: "244435529876",
    appId: "1:244435529876:web:043bcbf5b1fa9aa3d30481",
    measurementId: "G-E3GFWPP9T8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//setup and export database
export const db = getFirestore(app)

export const auth = getAuth(app)

//setup & activate storage 
export const storage = getStorage(app)