
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjOW0de0ou_amgfrIPEczS0mocF3aakXg",
  authDomain: "sunride-9bd18.firebaseapp.com",
  projectId: "sunride-9bd18",
  storageBucket: "sunride-9bd18.appspot.com",
  messagingSenderId: "146250529655",
  appId: "1:146250529655:web:e4944b9baeac4237237f72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);