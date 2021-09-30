
import { signInWithPopup,GoogleAuthProvider,getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCrOnzMuL1Ontd3XDQeyBFhmmr1pqwn3a0",
    authDomain: "crwn-9c549.firebaseapp.com",
    projectId: "crwn-9c549",
    storageBucket: "crwn-9c549.appspot.com",
    messagingSenderId: "405630482850",
    appId: "1:405630482850:web:56a82a25e112178b255afb"
};
const app = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()


const auth= getAuth()
auth.language= "ru"



signInWithPopup(auth, provider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
    }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
});
export const zz = signInWithPopup(auth,provider)
//export const auth = firebase.auth()
// import 'firebase/firestore';
// import 'firebase/auth';
//
// console.log(firebase)

//
// firebase.initializeApp(config);
//
// export const auth = firebase.auth();
// export const firestore = firebase.firestore();
//
// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select_account' });
// export const signInWithGoogle = () => auth.signInWithPopup(provider);
//
// export default firebase;

// 05:24
// 094 lessson
// project-405630482850
