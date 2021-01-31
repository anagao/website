$(document).ready(function() {
    fetch("navbar.html")
    .then(response => response.text())
    .then(text => {
        document.querySelector('#navbar').innerHTML = text;
        
        var currPage = location.pathname.split(/[\/.]/)[1];  // split("/stanford.html", /.) => stanford
        document.querySelector('#navitem-' + currPage).classList.add('active');
     });
});
