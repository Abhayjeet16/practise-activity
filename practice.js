
 var firebaseConfig = {
    apiKey: "AIzaSyCwPevFNY607s07qt0um6D6Kkzl4I58yYY",
    authDomain: "twitter-8e301.firebaseapp.com",
    databaseURL: "https://twitter-8e301-default-rtdb.firebaseio.com",
    projectId: "twitter-8e301",
    storageBucket: "twitter-8e301.appspot.com",
    messagingSenderId: "198415823239",
    appId: "1:198415823239:web:38dd47c1bed327c696a322",
    measurementId: "G-F4PDQM6TQF"
  };
  firebase.initializeApp(firebaseConfig); 
  function addUser(){
user_name=document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({purpose:"addinguser"});
  }