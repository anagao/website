$(document).ready(function() {
    $(".showMore").nextAll().hide();

    $(".showMore-icon").click(function () {
        var hiddenLI = $(this).parent().nextAll();
        hiddenLI.slideToggle("slow", function () {
            // called once per matched element
        });

        $(this).toggleClass("fa-angle-double-down fa-angle-double-up");
    });

    $(".liSlider").click(function () {
        var slider = $(this);
        slider.nextAll().slideToggle("slow", function () {
            slider.text($(this).is(':visible') ? "Hide older entries..." : "Show more...");
        });
    });
});