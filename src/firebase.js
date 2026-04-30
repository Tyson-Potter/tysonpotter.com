import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC4LMFGIaw_LBnBAgrDyHs6q0s3tAKAyyw",
  authDomain: "tysonpotterwebsite.firebaseapp.com",
  projectId: "tysonpotterwebsite",
  storageBucket: "tysonpotterwebsite.firebasestorage.app",
  messagingSenderId: "733253781017",
  appId: "1:733253781017:web:3c57e6d0145d8e00ca8c88"
};

export const app = initializeApp(firebaseConfig);
