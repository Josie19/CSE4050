var app_start = {};

(function(){
    var firebaseConfig = {
        apiKey: "AIzaSyC4AmYyRTqprtIOyyxcX36kLeuRZSIhUvo",
        authDomain: "cse4050-firebase-web2.firebaseapp.com",
        databaseURL: "https://cse4050-firebase-web2.firebaseio.com",
        projectId: "cse4050-firebase-web2",
        storageBucket: "cse4050-firebase-web2.appspot.com",
        messagingSenderId: "372829527392",
        appId: "1:372829527392:web:0da3b7d09c87615a551205",
        measurementId: "G-KYM9K2ZWKD"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      app_start = firebase;
      //firebase.analytics();
      const database = firebase.database();
  const rootRef = database.ref('users');

const userid = document.getElementById('userid');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const age = document.getElementById('age');
const addbtn = document.getElementById('addbtn');
const upbtn = document.getElementById('update');

addbtn.addEventListener('click', (e) => {
    e.preventDefault();
    rootRef.child(userid.value).set({
        first_name: fname.value,
        last_name: lname.value,
        age: age.value
    });
});
})()