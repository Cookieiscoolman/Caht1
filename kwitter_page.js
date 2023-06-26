const firebaseConfig = {
    apiKey: "AIzaSyDGg7K5bVgkCOoqLBcI_OcVoYYqkIOzezM",
    authDomain: "chat1-3a5dc.firebaseapp.com",
    projectId: "chat1-3a5dc",
    storageBucket: "chat1-3a5dc.appspot.com",
    messagingSenderId: "837486943155",
    appId: "1:837486943155:web:43cfd7946559c9288d89c6"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

function logout() {
 window.location = "index.html";
}
function send()
{
      msg = document.getElementById("msg").value;
        
      alert("user_name"+user_name);
      alert("room_name"+room_name);
      firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
       });
        document.getElementById("msg").value = "";
    
    
}
