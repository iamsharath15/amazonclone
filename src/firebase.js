import firebase from "firebase/app";
import "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCXS6HwKWMZ23RcBCkqev-oKgWpETWQfaA",
    authDomain: "amaclonezon.firebaseapp.com",
    projectId: "amaclonezon",
    storageBucket: "amaclonezon.appspot.com",
    messagingSenderId: "891875212316",
    appId: "1:891875212316:web:3fd22e28bca84a855a73d9"
  };
  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const auth = firebaseApp.auth();
  export {auth} ;