// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDeR17xzmzzBhYnzjkS0udQTchwl6ToCMg",
    authDomain: "inprof-test-b7cb7.firebaseapp.com",
    projectId: "inprof-test-b7cb7",
    storageBucket: "inprof-test-b7cb7.appspot.com",
    messagingSenderId: "558102875988",
    appId: "1:558102875988:web:9a28343c519991bf76c2c1",
    measurementId: "G-WX0Z9J4J31"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export default app
export const db = getFirestore(app);