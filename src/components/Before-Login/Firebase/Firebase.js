import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/storage";
import { getDatabase } from "firebase/database";
export const firebaseConfig = {
  apiKey: "AIzaSyAWZIUq1T1bWQxHNmPlEhNZqL2Ipw2D54E",
  authDomain: "artup-c41e2.firebaseapp.com",
  databaseURL: "https://artup-c41e2-default-rtdb.firebaseio.com",
  projectId: "artup-c41e2",
  storageBucket: "artup-c41e2.appspot.com",
  messagingSenderId: "281152529727",
  appId: "1:281152529727:web:0033ff4de62c728efc5f8a",
  measurementId: "G-N6SX3D3M3X",
};
firebase.initializeApp(firebaseConfig);
export const dataref = firebase.database();
export const storage = firebase.storage();
export const db = getDatabase();

export default firebase;
