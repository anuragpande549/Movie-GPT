// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbI5uRlE9h7S5YcT1bGnht76VFWD5Gwzs",
  authDomain: "movie-gpt-593be.firebaseapp.com",
  projectId: "movie-gpt-593be",
  storageBucket: "movie-gpt-593be.firebasestorage.app",
  messagingSenderId: "603839256022",
  appId: "1:603839256022:web:097a39285784d88b658077",
  measurementId: "G-C6H54B1EW7"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;