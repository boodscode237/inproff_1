// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBwhe1Su1dZam_LrL8_EGfaamqI4P0igbg",
    authDomain: "inprof-test.firebaseapp.com",
    projectId: "inprof-test",
    storageBucket: "inprof-test.appspot.com",
    messagingSenderId: "745833734806",
    appId: "1:745833734806:web:ee5d87ab2dfaadb2c958b7",
    measurementId: "G-4FLB20LLKE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export default app
export const db = getFirestore(app);