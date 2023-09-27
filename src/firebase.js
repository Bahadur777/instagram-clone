import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// const firebaseApp = firebase.initializeApp({
//     apiKey: "AIzaSyCjOATTS-hdPVkypGEAScEXHmCfMLMKxes",
//     authDomain: "instagram-clone-e1445.firebaseapp.com",
//     projectId: "instagram-clone-e1445",
//     storageBucket: "instagram-clone-e1445.appspot.com",
//     messagingSenderId: "111688823554",
//     appId: "1:111688823554:web:eca53cb357682bf54b081b",
//     measurementId: "G-2W7Y4K2CLS"
// })

const firebaseConfig = {
    apiKey: "AIzaSyCjOATTS-hdPVkypGEAScEXHmCfMLMKxes",
    authDomain: "instagram-clone-e1445.firebaseapp.com",
    projectId: "instagram-clone-e1445",
    storageBucket: "instagram-clone-e1445.appspot.com",
    messagingSenderId: "111688823554",
    appId: "1:111688823554:web:eca53cb357682bf54b081b",
    measurementId: "G-2W7Y4K2CLS"
  };
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const storage = firebase.storage();

const firebaseApp = initializeApp(firebaseConfig);
// Access Firebase services
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
export {db, auth}