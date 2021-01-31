$(document).ready(function () {
    $(".extraInfo").hide();

    $(".slider").click(function () {
        var slider = $(this);
        slider.prev().slideToggle("slow", function () {
            slider.text($(this).is(':visible') ? "Hide older entries..." : "Show more...");
        });
    });
});