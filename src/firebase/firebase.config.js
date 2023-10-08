// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiplucCwiOkfPymgA85FDXe7FNEGfOCVk",
  authDomain: "auth-moha-milon-7e27e.firebaseapp.com",
  projectId: "auth-moha-milon-7e27e",
  storageBucket: "auth-moha-milon-7e27e.appspot.com",
  messagingSenderId: "217066713126",
  appId: "1:217066713126:web:b001e13f4080e2fcae36e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;