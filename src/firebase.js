  import firebase from 'firebase'
  
  var config = {
    apiKey: "AIzaSyDjmRcPBE1EVS42tNLLRlZBMYDS_9LzU48",
    authDomain: "food-fun-friends-85c17.firebaseapp.com",
    databaseURL: "https://food-fun-friends-85c17.firebaseio.com",
    projectId: "food-fun-friends-85c17",
    storageBucket: "food-fun-friends-85c17.appspot.com",
    messagingSenderId: "883296755258"
  };


  firebase.initializeApp(config);
  export default firebase;