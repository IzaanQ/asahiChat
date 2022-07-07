import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp ( {
    apiKey: "AIzaSyB4qL4E2Zez5Ni4C-FQZqiJO1I5KIVeeSA",
    authDomain: "asahitalk-f664e.firebaseapp.com",
    projectId: "asahitalk-f664e",
    storageBucket: "asahitalk-f664e.appspot.com",
    messagingSenderId: "1063737663797",
    appId: "1:1063737663797:web:b7c6da67e536882065ec7c",
    measurementId: "G-9V8SH6BMTS"
  }).auth();