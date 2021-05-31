// does NOT need jQuery

fetch("navbar.html")
.then(response => response.text())
.then(text => {
	const parser = new DOMParser();
    const html = parser.parseFromString(text, "text/html");

    // mark the current page as "active"
    var htmlFilename = window.location.pathname.split("/").pop();  // "stanford.html"
    var currPage = htmlFilename.replace(".html", "");  // "stanford"
    html.documentElement.querySelector('#navitem-' + currPage).classList.add('active');

    const nav = html.documentElement.querySelector("nav");
    document.querySelector('#navbar').appendChild(nav);
});
