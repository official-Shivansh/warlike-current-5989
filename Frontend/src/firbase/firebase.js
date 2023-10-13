// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTl-10BtRIZLOaK6zcanaEO4o_ybxyH1c",
  authDomain: "recipe-swap-f7ba8.firebaseapp.com",
  projectId: "recipe-swap-f7ba8",
  storageBucket: "recipe-swap-f7ba8.appspot.com",
  messagingSenderId: "260073899462",
  appId: "1:260073899462:web:ed80a60c25e39eced85ec7",
  measurementId: "G-PQGBWEEEJJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();












// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
// // import { getFirestore } from '@firebase/firestore';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// import { getAuth, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';

// // import firebase from 'firebase/database/compat/app';
// // import firebase from 'firebase/compat/app';
// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyCeicjQkX-urjh_t8leap8yl7L5QAY0CL8",
//     authDomain: "thundertech-27.firebaseapp.com",
//     projectId: "thundertech-27",
//     storageBucket: "thundertech-27.appspot.com",
//     messagingSenderId: "1002919593555",
//     appId: "1:1002919593555:web:855ebdb9365c3c6f93a8a6"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);
// export const auth = getAuth(app);
// export const googleProvider = new GoogleAuthProvider();
// export const githubProvider = new GithubAuthProvider();