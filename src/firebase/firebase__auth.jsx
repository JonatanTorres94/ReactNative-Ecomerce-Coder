// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTK4AiWgx6lHwp9dfXSNFYa2Yhjacq7EQ",
  authDomain: "jonatantorrescoder.firebaseapp.com",
  databaseURL: "https://jonatantorrescoder-default-rtdb.firebaseio.com",
  projectId: "jonatantorrescoder",
  storageBucket: "jonatantorrescoder.appspot.com",
  messagingSenderId: "1073547715912",
  appId: "1:1073547715912:web:bc0bb689f4a5d058733f7d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const firebasE_auth = getAuth(app)