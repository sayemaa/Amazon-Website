// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCYWm4EM5eU2TdotQy5oJZFG8Ze-60OG9c",
    authDomain: "fir-d1bd3.firebaseapp.com",
    projectId: "fir-d1bd3",
    storageBucket: "fir-d1bd3.appspot.com",
    messagingSenderId: "621292747659",
    appId: "1:621292747659:web:c1328277b31d4a9b638d8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
