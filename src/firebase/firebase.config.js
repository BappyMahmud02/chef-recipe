// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5eQnJeX6vlThkSgYxu1A9cpSBBKovHo4",
  authDomain: "chef-recipe-special.firebaseapp.com",
  projectId: "chef-recipe-special",
  storageBucket: "chef-recipe-special.appspot.com",
  messagingSenderId: "802117076982",
  appId: "1:802117076982:web:af447bbf1f2e65a4e169d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app ;