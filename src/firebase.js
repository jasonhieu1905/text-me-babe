import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyAE2X9xqQVjgWRCQlYE6M_ybkuyfezPo4Y",
  authDomain: "text-me-78538.firebaseapp.com",
  databaseURL: "https://text-me-78538.firebaseio.com",
  projectId: "text-me-78538",
  storageBucket: "text-me-78538.appspot.com",
  messagingSenderId: "1044420429149",
  appId: "1:1044420429149:web:3a12ea80b35c5d2fe494b4"
};

var firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
