import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "linked-out-51448.firebaseapp.com",
  projectId: "linked-out-51448",
  storageBucket: "linked-out-51448.appspot.com",
  messagingSenderId: "1087985074635",
  appId: "1:1087985074635:web:b5da9f6a506d1c3589364e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
