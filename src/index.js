// import { initializeApp } from '/firebase/app'
// import { getStorage } from '/firebase/storage'
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
import { getStorage } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-storage.js';
// import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCoS9aubGBl4GZMOEisAIJdPQdqCqacijU",
  authDomain: "annaaignatenko.firebaseapp.com",
  projectId: "annaaignatenko",
  storageBucket: "annaaignatenko.appspot.com",
  messagingSenderId: "493039343783",
  appId: "1:493039343783:web:741f5f937e9ae2453aa382",
  measurementId: "G-TXEWDNG6GQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
// const db = getFirestore(firebaseApp);
// const analytics = getAnalytics(app);
console.log(firebaseConfig)