// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChKJ2Nu8erbIwGIutohD1yJbeZFPJnZtI",
  authDomain: "abctools-4b309.firebaseapp.com",
  projectId: "abctools-4b309",
  storageBucket: "abctools-4b309.appspot.com",
  messagingSenderId: "311729284161",
  appId: "1:311729284161:web:ba7e0aed9dde84cac152c0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
