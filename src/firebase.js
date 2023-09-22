import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyC1R3UF17w9FGk-DF7wM_u4q_DhI95r_xI",
    authDomain: "pushinh-6699f.firebaseapp.com",
    projectId: "pushinh-6699f",
    storageBucket: "pushinh-6699f.appspot.com",
    messagingSenderId: "723374669208",
    appId: "1:723374669208:web:832af6a49b30023c6dbfed"
  };
export const app = initializeApp(firebaseConfig) 
export  const messaging = getMessaging(app) 