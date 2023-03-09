// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  doc,
  deleteDoc,
  addDoc,
  updateDoc,
} from "firebase/firestore";
import { INewNote } from "./types/types";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7fm1ol7PEDWMmIH34N9fiMOk_ttIUdPM",
  authDomain: "note-keeper-849c2.firebaseapp.com",
  projectId: "note-keeper-849c2",
  storageBucket: "note-keeper-849c2.appspot.com",
  messagingSenderId: "913414578261",
  appId: "1:913414578261:web:43107eeb7df4b083d0f4dc",
  measurementId: "G-3MVKP6S0GM",
};
const DB_NAME = "notes";

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const collectionRef = collection(db, DB_NAME);
export const getDocRefById = (id: string) => doc(db, DB_NAME, id);
export const deleteDocById = async (id: string) => deleteDoc(getDocRefById(id));
export const addDocAsync = (data: INewNote) => addDoc(collectionRef, data);
export const updateDocAsync = (data: any, id: string) =>
  updateDoc(getDocRefById(id), data);
