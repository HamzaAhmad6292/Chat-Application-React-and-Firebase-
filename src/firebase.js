import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXIrWtnNVz9uAU8yomEzIDky9lrsUhOyU",
  authDomain: "chat-994c7.firebaseapp.com",
  databaseURL: "https://chat-994c7-default-rtdb.firebaseio.com",
  projectId: "chat-994c7",
  storageBucket: "chat-994c7.appspot.com",
  messagingSenderId: "732288109944",
  appId: "1:732288109944:web:c22eb335e88cdb3a294c8d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
