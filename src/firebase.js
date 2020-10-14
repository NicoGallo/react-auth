import app from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAlkREachTB-v_d19-3OWLuHUcl78v-h70",
    authDomain: "projecto-auth.firebaseapp.com",
    databaseURL: "https://projecto-auth.firebaseio.com",
    projectId: "projecto-auth",
    storageBucket: "projecto-auth.appspot.com",
    messagingSenderId: "427682175328",
    appId: "1:427682175328:web:478fc3f7ef6a32f3fba605"
};

app.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();

export {auth, db}