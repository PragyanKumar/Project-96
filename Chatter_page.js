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
    //Getdata Function//
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

   //Messaging code//      
console.log(firebase_message_id)
console.log(message_data)
names=message_data['name']
message=message_data['message']
like=message_data['like']
name_with_tag="<h4>"+names+"<img class='user_tick' src='tick.png'></h4>"
message_with_tag="<h4 class='message_h4'>"+ message + "</h4>"
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value=" + like + " onclick='updateLike(this.id)'>"
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'> like: " + like + "</span></button><hr>"
row=name_with_tag+message_with_tag+like_button+span_with_tag
document.getElementById("output").innerHTML+=row 
      } });  }); }
getData();
//Updatelike function//
function updateLike(message_id){
      console.log(message_id)
      button_id=message_id
      likes=document.getElementById(button_id).value
      update_Likes=Number(likes)+1
      console.log(update_Likes)
      firebase.database().ref(room_name).child(message_id).update({
            like:update_Likes
      })
      }
      //Logout function//
      function logout(){
            localStorage.removeItem("room_name")
            localStorage.removeItem("user_name")
            window.location="index.html"
      }
