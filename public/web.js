var app_firebase = {};
(function() { 
    //initialize firebase
var config = {
    apiKey: "AIzaSyAjutEM72BnpnjZhs_diy1hmkoqmegVxI4",
    authDomain: "cse4050-firebase-web.firebaseapp.com",
    databaseURL: "https://cse4050-firebase-web.firebaseio.com",
    projectId: "cse4050-firebase-web",
    storageBucket: "cse4050-firebase-web.appspot.com",
    messagingSenderId: "904068807368",
    appId: "1:904068807368:web:645437a1f1b4fd3d4303fd"
};

firebase.initializeApp(config);
app_firebase = firebase;
var firestore = firebase.firestore();

const docRef = firestore.doc("users/studentData");//syntax: users/<field_name> if error
const outputHeader = document.querySelector("#outputText");
const inputField = document.querySelector("#inputText");
const saveButton = document.querySelector("#saveButton");
const loaderButton = document.querySelector("#loadButton");

saveButton.addEventListener("click", function(){
    const textSave = inputField.value;
    console.log("The input: "+textSave+", is now on firebase.");
    docRef.set({
        fullName: textSave
    }).then(function(){
        console.log("Input saved!");
    }).catch(function(){
         console.error("Error message: ", error);
    })
})

loaderButton.addEventListener("click", function(){
    docRef.get().then(function (doc) {
        if(doc && doc.exists){
            const myData = doc.data();
            outputHeader.innerText = "Current in the cloud: "+ myData.fullName;
        }
    }).catch(function(error){
        console.log("Error message", error);
    })
})

getRealtimeUpdates = function(){
    docRef.onSnapshot({includeMetadataChanges: true}, function (doc){
        if(doc && doc.exitst){
            const myData = doc.data();
            console.log("Notification of incoming document ", doc);
            outputHeader.innerText = "Name on Cloud: "+ myData.fullName;
        }
    })
}

getRealtimeUpdates();
/*
var dBase = firebase.firestore();//incorrect syntax?

  dBase.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
})
.then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
.catch(function(error) {
    console.error("Error adding document: ", error);//uncaught permissions
});
dBase.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
});
*/
})()
