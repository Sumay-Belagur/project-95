function back_to_room() {
    window.location= "chatroom.html"
}

room_name_inRoom= localStorage.getItem("RoomName");

document.getElementById("room_h1").innerHTML= "Room name:" + "<br>" +"<br>"+ room_name_inRoom;

function btn_change1() {
    document.getElementById("backToRoom_btn").innerHTML= "🔙" + "Back to rooms";
}

function btn_change2() {
    document.getElementById("backToRoom_btn").innerHTML= "Back to rooms";
}