var currCourseName = null;	//global variable

$(document).ready(function(){

//Click "Fr 10-11" -> show/hide the row
$("th").click(function () { 
      $(this).siblings("td").toggle();
});

$(".hiddenDescription").hide();

$(".courseName").click(function(){
	if(currCourseName != null)
		currCourseName.removeClass("highlight");
	
	$(this).addClass("highlight");
	currCourseName = $(this);

	var courseDescription = $(this).next();
	$(courseDescription).find("li").show();
	$("#description").html(courseDescription.html());
});

//filters. TODO: Re-show relevant courses
$("#CS-filter").click(function(){
	//hide all, then show all CS
	$("table").find("li").hide();
	$("table").find("li.CS").show();
	$("#GPA").text("Computer Science GPA: 3.932");
	
	//Remove highlights and reset description to blank.
	if(currCourseName != null)
		currCourseName.removeClass("highlight");
	$("#description").html("Select a CS course:");
}); 
  
$("#math-filter").click(function(){
	//hide all, then show all CS
	$("table").find("li").hide();
	$("table").find("li.math").show();
	$("#GPA").text("Math GPA: 4.100");
	
	//Remove highlights and reset description to blank.
	if(currCourseName != null)
		currCourseName.removeClass("highlight");
	$("#description").html("Select a Math course:");

});
  
$("#all-filter").click(function(){	
	$("table").find("li").show();
	$("#GPA").text("Overall GPA: 3.919");

	//Remove highlights and reset description to blank.
	if(currCourseName != null)
		currCourseName.removeClass("highlight");
	$("#description").html("Select a course:");
});
  

});