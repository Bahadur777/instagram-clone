import firebase from "firebase"
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCjOATTS-hdPVkypGEAScEXHmCfMLMKxes",
    authDomain: "instagram-clone-e1445.firebaseapp.com",
    projectId: "instagram-clone-e1445",
    storageBucket: "instagram-clone-e1445.appspot.com",
    messagingSenderId: "111688823554",
    appId: "1:111688823554:web:eca53cb357682bf54b081b",
    measurementId: "G-2W7Y4K2CLS"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export{db, auth, storage}