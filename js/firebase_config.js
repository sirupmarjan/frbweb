var firebase = require('firebase')

var firebaseConfig = {
    apiKey: "AIzaSyAbBSjhu1VfFCwh00ZD_eSNLeMczqhah7s",
    authDomain: "realtimedb-c7a53.firebaseapp.com",
    databaseURL: "https://realtimedb-c7a53-default-rtdb.firebaseio.com",
    projectId: "realtimedb-c7a53",
    storageBucket: "realtimedb-c7a53.appspot.com",
    messagingSenderId: "574998053084",
    appId: "1:574998053084:web:43ed7f70e92e91d5bcf419",
    measurementId: "G-4RKYEXK458"
  };
var fbdo = firebase.initializeApp(firebaseConfig);


module.exports = fbdo;