var istatus = document.querySelector("h5");
var addfriend = document.getElementById("add");
var check = 0; // Declare check outside the event handler

addfriend.addEventListener("click", function () {
    if (check == 0) {
        istatus.innerHTML = "friend";
        istatus.style.color = "green";
        check = 1;
    } else {
        istatus.innerHTML = "stranger";
        istatus.style.color = "red";
        check = 0;
    }
});
