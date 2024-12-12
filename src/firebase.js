// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDovajBnCr32Nil3kLF7m7PsHIpCfSzbTg",
  authDomain: "realtor-clone-react-591ab.firebaseapp.com",
  projectId: "realtor-clone-react-591ab",
  storageBucket: "realtor-clone-react-591ab.firebasestorage.app",
  messagingSenderId: "691753502502",
  appId: "1:691753502502:web:7bc6ad7f8447c6c93223e7",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
