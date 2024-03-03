// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTp2Q7nQyRv_h8ivpMeGc1C-lieDNbt00",
  authDomain: "bqfp-75599.firebaseapp.com",
  projectId: "bqfp-75599",
  storageBucket: "bqfp-75599.appspot.com",
  messagingSenderId: "651133181574",
  appId: "1:651133181574:web:381c83d6d60af33ca13b07",
  measurementId: "G-5NNJXH9R55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);


 