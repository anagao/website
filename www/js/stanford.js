var currCourseElement = null;    //global variable

$(document).ready(function() {
    /* Do things after DOM has fully loaded */ 

    /* ----- 1) Set on-click handlers ----- */

    //Click "Fr 10-11" -> show/hide the row
    $("th .fas").click(function () {
        $(this).parent().siblings("td").toggle();
        $(this).toggleClass("fa-chevron-down fa-chevron-right");
    });

    $(".courseName").click(function () {
        // highlight new selection
        $(this).addClass("highlight");

        // set global var
        currCourseElement = $(this);

        // update modal contents, using h1.courseName and section.hiddenDescription
        var currCourseLI = currCourseElement.parent().clone();
        $(currCourseLI).find(".hiddenDescription").show();    // un-hide description (only in copy)
        $("#descriptionModal-title").html( $(currCourseLI).find(".courseName").html() );
        $("#descriptionModal-body").html( $(currCourseLI).find(".hiddenDescription").html() );
        $('#descriptionModal').modal('show');
        
    });

    // when closing the modal, un-highlight the selected course name
    $('#descriptionModal').on('hidden.bs.modal', function () {
        currCourseElement.removeClass("highlight");
        currCourseElement = null;
    })

    // Filter buttons
    $("#CS-filter").click(function () {
        courseFilter("CS");
    });
    $("#math-filter").click(function () {
        courseFilter("MATH");
    });
    $("#masters-filter").click(function () {
        courseFilter("masters");
    });
    $("#all-filter").click(function () {
        courseFilter("all");
    });
    
    /* ----- 2) Upon page load ----- */
    $(".hiddenDescription").hide();
    $(".GPA").hide();
    
    // "All" is chosen by default
    $("#all-filter").button("toggle");  // highlight filter button
    $("#all-GPA").show();
});

/* Helper function, called when filter button is clicked
 * @param String subject {CS, math, masters, all}
 */
function courseFilter(subject) {
    var allCourseLI = $("#four-year-plan-table td > ul > li");
    //hide all
    allCourseLI.hide();
    
    // Show only courses whose CSS class match <subject>
    if (subject === "all") { // no filter
        allCourseLI.show();
    } else {
        allCourseLI.filter("." + subject).show();
    }

    // Check global var, and if a course is currently selected, 
    // unselect it by removing highlight
    if (currCourseElement !== null) {
        currCourseElement.removeClass("highlight");
    }

    // Only show GPA of <subject>
    $(".GPA").hide();
    $("#"+subject+"-GPA").show();    
};