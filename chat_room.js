function getData(){
    firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
    Room_names = childKey;}
    )})};
    firebase_message_id = childKey;
    message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data('name');
like = message_data('like');
name_with_tag - "<h4>"+ name +"<h4>"
message_with_tag = "<h4 clas-'message_h4'>" + message + "<h4>";
like_button -"<button class-'btn btn-warning' id-"+firebase_message_id+"value-"+like+"onclick='updateLike(this.id)'>Likes :"+ like +"</button>"

row = name_with_tag + message_with_tag +like_button;
document.getElementById("output").innerHTML += row;

function updateLike(message_id)
{
    console.log("clicked on like button - " + message_id);
    button_id = message_id
    likes = document.getElementById(button_id).value;
    updated_likes=Number(likes) + 1;
    console.log(updated_likes);

    firebase.database().ref(room_name).child(message_id).update({
        like : updated_likes
    });

}
function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("kwitter.html");
}
//End code
    getData();