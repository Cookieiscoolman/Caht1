



var firebaseConfig = {
    apiKey: "AIzaSyDhgvBnYMDyyAPL7jgIyf35YZJVJN4JLqo",
    authDomain: "chat-35b65.firebaseapp.com",
    projectId: "chat-35b65",
    storageBucket: "chat-35b65.appspot.com",
    messagingSenderId: "478548008221",
    appId: "1:478548008221:web:62a3fc96596b68cb0555f4"
  };

  firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });

    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";

}



