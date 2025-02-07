import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCNiF4aWZC2qwtPYFfMyMPf2lJ65YCh-DM",
    authDomain: "elevadores-86110.firebaseapp.com",
    projectId: "elevadores-86110",
    storageBucket: "elevadores-86110.firebasestorage.app",
    messagingSenderId: "1075010727165",
    appId: "1:1075010727165:web:beace846a033e04dbc6294",
    measurementId: "G-1GM2Y327SS"
  };

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

