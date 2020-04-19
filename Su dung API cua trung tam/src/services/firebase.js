import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

//Thong so config cua firebase
const firebaseConfig = {
    apiKey: "AIzaSyB8xOjeGHM5b610yJl_w6Wxpf4hjbotVgY",
    authDomain: "cyberlearn-21.firebaseapp.com",
    databaseURL: "https://cyberlearn-21.firebaseio.com",
    projectId: "cyberlearn-21",
    storageBucket: "cyberlearn-21.appspot.com",
    messagingSenderId: "170302830030",
    appId: "1:170302830030:web:c994eda257cdc2b030a79f"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;
