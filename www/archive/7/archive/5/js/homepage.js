/*
var respondToClick = function(event) {
	var newDiv = document.createElement('div');		//created a DIV
	newDiv.className = 'content';					//gave the DIV a class name (for css formatting)
	
	var newText = document.createTextNode('NEW TEXT NODE test');	//created a TEXT NODE
	newDiv.appendChild(newText);									//added the TEXT NODE to the div
	
	var body = document.getElementById('body');
	body.appendChild(newDiv);						//added the DIV+TEXT NODE to the BODY
};

var respondToClick_Delete = function(event) {
	//body.removeChild(body.lastChild);
	var body = document.getElementById('body');
	
	var newText = document.createTextNode('Hello world!');
	body.insertBefore(newText, body[0]);
};
*/

function getBrowserInfo() {
	serialization = "<p>You are using " + navigator.userAgent + "</p>";	
	document.getElementById('introduction').innerHTML += serialization;
};

function LoadCaption(imageCaption){
	//document.getElementById('GalleryPicture').src = imageFile;
	document.getElementById('GalleryCaption').innerHTML = imageCaption;
}

function configure() {
	//document.getElementById('add_button').onclick = respondToClick;
	//document.getElementById('delete_button').onclick = respondToClick_Delete;
	getBrowserInfo();
	LoadCaption('Version 1 was created with Yahoo Pagebuilder and hosted by Yahoo GeoCities. It was my first attempt at creating a website in middle school.');
};