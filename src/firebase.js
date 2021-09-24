import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAtkPJR19c5aVMfo50zDH8vQjFe3KfoVOQ",
    authDomain: "disneyplus-clone-2cc2e.firebaseapp.com",
    projectId: "disneyplus-clone-2cc2e",
    storageBucket: "disneyplus-clone-2cc2e.appspot.com",
    messagingSenderId: "287890140181",
    appId: "1:287890140181:web:03209dcfafd08a819bf21c",
    measurementId: "G-K58924Y08Y"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export {auth, provider, storage};
  export default db;
  
  