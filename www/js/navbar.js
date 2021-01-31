$(document).ready(function() {
    fetch("navbar.html")
    .then(response => response.text())
    .then(text => {
        document.querySelector('#navbar').innerHTML = text;
        
        // mark the current page as "active"
        var htmlFilename = window.location.pathname.split("/").pop();  // "stanford.html"
        var currPage = htmlFilename.replace(".html", "");
        document.querySelector('#navitem-' + currPage).classList.add('active');
     });
});
