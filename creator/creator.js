var content = document.getElementById("content");
var articleContainer = document.getElementById("container");

content.addEventListener("input", function() {
    articleContainer.innerHTML = content.textContent;
}, false);

function addHTML(html) {

    var newHTML = html.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#039;');

    content.innerHTML += newHTML;
}

function createDocument() {
    var fr =  new FileReader();
}