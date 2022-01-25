
function defClick() {
    alert("Ninja was liked");
}

function loginBtn(){
    document.getElementById("loginBtn").value = "logout"
}
function hideBtn(){
    var btn = document.getElementById("hideBtn");
    if (btn.style.display === "none") {
    btn.style.display = "block";
    } else {
    btn.style.display = "none";
    }
}
