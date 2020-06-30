var firebase = require('firebase');

var app = firebase.initializeApp({
    apiKey: "AIzaSyAEtVOj-r2GAa2e-Hq-0LWC6Wk_p92TG6E",
    authDomain: "raspberrypi-95510.firebaseapp.com",
    databaseURL: "https://raspberrypi-95510.firebaseio.com",
    projectId: "raspberrypi-95510",
    storageBucket: "raspberrypi-95510.appspot.com",
    appId: "1:473064714962:web:665d80804d26004553330b",
  });


let defaultAuth = firebase.auth();

function getFormattedDate() {
    var date = new Date();
    var str = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " +  date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    return str;
}

let exec = async () => {

    try{
        let res = await defaultAuth.signInWithEmailAndPassword('mirandacw@gmail.com', 'asdqwe');
    }catch(e) {
        console.log(e);
    }
   
    let database = firebase.database();

    try {
        database.ref('ip/').push({
            date: getFormattedDate(),
            entry: '0.0.0.0'
        }, function(error) {
            if (error) {
             console.log(error);
            } else {
            // Data saved successfully!
                console.log("Success");
            }
        });
    } catch(e){
        console.log(e);
    }

    
    



}

exec();

