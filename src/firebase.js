import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAw9mrTqYfgbK309A_HWgWDz_FwDTo3jPw",
  authDomain: "disneyplus-clone-20964.firebaseapp.com",
  projectId: "disneyplus-clone-20964",
  storageBucket: "disneyplus-clone-20964.appspot.com",
  messagingSenderId: "391752133788",
  appId: "1:391752133788:web:c254795f5b57248676d159",
  measurementId: "G-0K1N4076YT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
