var subject = document.getElementById("subject");
var message = document.getElementById("message");

var chapterContainer = document.getElementById("contentsLinks");

window.onload = function createChapters() {
    var chapters = document.getElementsByTagName("h2");
    for(var i = 0; i < chapters.length; i++) {
        var element = document.createElement("A");
        element.innerHTML = chapters[i].innerHTML;
        chapterContainer.appendChild(element);
    }
};

function sendEmail() {
    var url = "mailto:classicmcsupport@protonmail.com?subject=" + subject.innerText + "&body=" + message.innerText;
    window.open(url, "_blank").focus();
}