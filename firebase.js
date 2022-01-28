import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBM2NctXOEYN1JFODnfVBTiVuQarB_V1fs",
    authDomain: "disney-clone-6ff6d.firebaseapp.com",
    projectId: "disney-clone-6ff6d",
    storageBucket: "disney-clone-6ff6d.appspot.com",
    messagingSenderId: "41216487597",
    appId: "1:41216487597:web:f936c48b832fc8cb4dd624",
    measurementId: "G-1WWDNCPXBM"
  };

  const app = !firebase.apps.length 
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

  const db = app.firestore()

  export { db };
  