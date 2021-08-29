
//ADD YOUR FIREBASE LINKS HERE
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

    //Username//
    user_name=localStorage.getItem("user_name")
    document.getElementById("user_name").innerHTML="Welcome " + user_name + "!"
    
    //add room //
    function addRoom(){
            room_name=document.getElementById("room_name").value 
            firebase.database().ref("/").child(room_name).update({
                  purpose: "adding room name"
            })
            localStorage.setItem("room_name",room_name)
            window.location="Chatter_page.html"
    }

    //Get data//
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
      console.log("room_name-" + Room_names)
      row="<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'> #" + Room_names + "</div> <hr>"
      document.getElementById("output").innerHTML += row
      
      });});}
getData();

//Redirect to room name//
function redirectToRoomName(name){
      console.log(name)
      localStorage.setItem("room_name",name)
      window.location="kwitter_page.html"
}

//Logout function//
function logout(){
      localStorage.removeItem("room_name")
      localStorage.removeItem("user_name")
      window.location="index.html"
}