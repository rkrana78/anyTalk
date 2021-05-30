import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDxzlUqNqJbjX0Z0vh-y2cIjc-p1gSUtsc",
    authDomain: "any-talk-a80f5.firebaseapp.com",
    projectId: "any-talk-a80f5",
    storageBucket: "any-talk-a80f5.appspot.com",
    messagingSenderId: "1096145696594",
    appId: "1:1096145696594:web:443319c41891e31090ec8b"
  };
  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider =new firebase.auth.GoogleAuthProvider();

  export{auth, provider};
  export default db;