var app_firebase = {};
(function() { 
    //initialize firebase
var config = {
    apiKey: "AIzaSyAjutEM72BnpnjZhs_diy1hmkoqmegVxI4",
    authDomain: "cse4050-firebase-web.firebaseapp.com",
    databaseURL: "https://cse4050-firebase-web.firebaseio.com/login.html?mode=select",
    projectId: "cse4050-firebase-web",
    storageBucket: "cse4050-firebase-web.appspot.com",
    messagingSenderId: "904068807368",
    appId: "1:904068807368:web:645437a1f1b4fd3d4303fd"
};

firebase.initializeApp(config);
app_firebase = firebase;
//const firestore = firebase.firestore();
})()