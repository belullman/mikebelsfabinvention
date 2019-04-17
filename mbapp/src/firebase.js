import firebase from "firebase";
const config = {
    apiKey: "AIzaSyC17pAVGGPdX8WkVSi_iBiwm8mofsFIyTA",
    authDomain: "mbapp-1c66c.firebaseapp.com",
    databaseURL: "https://mbapp-1c66c.firebaseio.com",
    projectId: "mbapp-1c66c",
    storageBucket: "",
    messagingSenderId: "172838834775"
};


firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;