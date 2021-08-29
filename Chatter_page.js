//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCKlLEiF9moXPtUKv-PXJdHjyFStCXMhU0",
      authDomain: "kwitter-8c35f.firebaseapp.com",
      databaseURL: "https://kwitter-8c35f-default-rtdb.firebaseio.com",
      projectId: "kwitter-8c35f",
      storageBucket: "kwitter-8c35f.appspot.com",
      messagingSenderId: "375418005976",
      appId: "1:375418005976:web:c18707cfc03bc303cbaaad"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name")
    room_name=localStorage.getItem("room_name")

    //Send function//
    function send(){
          msg=document.getElementById("msg").value 
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          })
          document.getElementById("msg").value=""
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

      } });  }); }
getData();
