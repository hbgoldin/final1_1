import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCJ7toFVJwXzvW73e51ijsqSFc_1blcKzc",
    authDomain: "finalbrowser.firebaseapp.com",
    projectId: "finalbrowser",
    storageBucket: "finalbrowser.appspot.com",
    messagingSenderId: "466128321869",
    appId: "1:466128321869:web:045c5423f6391d4ef38b04"
};
// Initialize Firebase
const Fire = firebase.initializeApp(firebaseConfig);

export default Fire;