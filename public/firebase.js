// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
    apiKey: "AIzaSyCo2kEJ4sPRJS6F_gaoTKYyAAFFPtkwVTQ",
    authDomain: "car-catalog-ff7eb.firebaseapp.com",
    projectId: "car-catalog-ff7eb",
    storageBucket: "car-catalog-ff7eb.appspot.com",
    messagingSenderId: "981946168543",
    appId: "1:981946168543:web:7b387d04ec9b8cd070256a",
    measurementId: "G-2CDB0G3CQ2"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);