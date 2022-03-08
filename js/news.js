function fun__but(element) {
    var text = document.getElementById(element); //"postadd"
    if (text.style.display === "none") {
        text.style.display = "block";
    }
    else {
        text.style.display = "none";
    }
}

function fun__but_com() {
    var text = document.getElementById("comentadd"); // "comentadd"
    if (text.style.display === "none") {
        text.style.display = "block";
    }
    else {
        text.style.display = "none";
    }
}