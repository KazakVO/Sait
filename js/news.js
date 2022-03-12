init();

function fun__but(element) {

    var text = document.getElementById(element); //"postadd"
    if (text.style.display === "none") {
        text.style.display = "block";
    }
    else {
        text.style.display = "none";
    }
}

function init(){
    var elements = document.getElementsByClassName('jsrepost');

    for(var i = 0; i < elements.length; i++)
        elements[i].style.display = "none";
}

function repost(element){
    var text = document.getElementById(element); //"postadd"

    var pidaras_display = text.style.display;

    if (text.style.display == "none") {
        text.style.display = "block";
    }
    else {
        text.style.display = "none";
    }

    var newStyle = document.getElementById(element).style.display;

    var elements = document.getElementsByClassName('jsrepost');

    for(var i = 0; i < elements.length; i++)
    {
        var textid = text.id;
        var elId = elements[i].id;
        if(textid != elId){
            var elStyle = elements[i].style.display;
            if (elements[i].style.display == "block") {
                elements[i].style.display = "none";
            }
        }
    }

    var oldStyle = document.getElementById(element).style.display;

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