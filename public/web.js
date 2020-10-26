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
const inputField = document.querySelector("#inputName");
const inputField2 = document.querySelector("#inputYear");
const inputField3 = document.querySelector("#inputMajor");
const inputField4 = document.querySelector("#inputAge");
const saveButton = document.querySelector("#saveButton");
const loaderButton = document.querySelector("#loadButton");
//saving data to docRef is not working; inputField2,3,4 are returning a NULL value
saveButton.addEventListener("click", function(){
    const textSave = inputField.value;
    const textSave2 = inputField3.value;
    const numSave = inputField2.value;
    const numSave2 = inputField4.value;
    console.log(`The input: ${textSave}, ${numSave2}, is now on firebase.`);
    docRef.set({
        fullName: textSave,
        gradYear: numSave2,
        studentMajor: textSave2,
        studentAge: numSave
    }).then(function(){
        console.log("Input saved!");
    }).catch(function(){
         console.error("Error message: ", error);
    })
})

//retreiving data is working
loaderButton.addEventListener("click", function(){
    docRef.get().then(function (doc) {
        if(doc && doc.exists){
            const myData = doc.data();
            outputHeader.innerText = "Current in the cloud: "+ "Username: " + myData.fullName + ", Grad Year: " + myData.gradYear + ", Major: " + myData.studentMajor + ", Age: " +myData.studentAge;

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
            outputHeader.innerText = "Name on Cloud: "+ "Username: " + myData.fullName + ", Grad Year: " + myData.gradYear + ", Major: " + myData.studentMajor+ ", Age: " + myData.studentAge;
        }
    })
}

getRealtimeUpdates();
//next, adding cloud firestore messaging
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
