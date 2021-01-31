$(document).ready(function(){
/*
$(".hidden").hide();

$("#showMoreVersions").click(function(){
	var slider = $(this);
    $(".hidden").slideToggle("slow", function() {
    	slider.text($(this).is(':visible') ? "HIDE..." : "SHOW MORE...");
	});
});
*/

$('#socialNetworksList li').hover(
	function() {
		$('img', this).stop().animate({marginLeft : 5}, 250);
	}, 
	function () {
		$('img', this).stop().animate({marginLeft : 10}, 250);
	}
	);


});