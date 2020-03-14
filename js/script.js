function myText(e) {
    document.getElementById("h1").innerHTML = "Hello world";
}

function myTextColor(e) {
    document.getElementById("h1").style.color = "white";
}

function changeBoxColor(e) {
    document.getElementById("color_box-1").style.backgroundColor = "red";

}

function changeBoxColorYellow(e) {
    document.getElementById("color_box-1").style.backgroundColor = "yellowgreen";

}

function refreshThePage() {
    location.reload();
}

function quote() {
    document.getElementById("quote").innerHTML =
        "Quality is not an act, it is a habit. <br> <small>-Aristotle</small>";
}

function quoteTwo() {
    document.getElementById("quote").innerHTML =
        "Change in all things is sweet. <br> <small>-Aristotle</small>";
}

function bodyBgColorChange() {
    document.body.style.backgroundColor = "black";
}

function bulbOn() {
    document.getElementById("bulbImg").src = "images/pic_bulbon.gif"
}

function bulbOff() {
    document.getElementById("bulbImg").src = "images/pic_bulboff.gif"
}