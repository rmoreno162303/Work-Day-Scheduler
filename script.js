var dateToday = moment().format('dddd, MMM Do YYYY');
$('#currentDay').html(dateToday);


$(document).ready(function () {

    $(".savebtn").on("click", function () {
        var text = $(this).siblings(".schedTime").val;
        var time = $(this).parent().attr("id");

        window.localStorage.setItem("time", "text");
    })

    function timeTracker() {
        var timeNow = moment().hour();

        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);


            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }

        });

    }


    // $('#tenAm').html(window.localStorage.getItem("time"));
    $("#tenAm .description").val(localStorage.getItem("info", "time"));
    $("#elevenAm .description").val(localStorage.getItem("elevenAm"));
    $("#twelvepm .description").val(localStorage.getItem("twelvePm"));
    $("#onePm .description").val(localStorage.getItem("onePm"));
    $("#twoPm .description").val(localStorage.getItem("twoPm"));
    $("#threePm .description").val(localStorage.getItem("threePm"));
    $("#fourPm .description").val(localStorage.getItem("fourPm"));
    $("#fivePm .description").val(localStorage.getItem("fivePm"));
    $("#sixPm .description").val(localStorage.getItem("sixPm"));
    $("#sevenPm .description").val(localStorage.getItem("sevenPm"));
    $("#eightPm .description").val(localStorage.getItem("eightPm"));
    $("#ninePm .description").val(localStorage.getItem("ninePm"));
    $("#tenPm .description").val(localStorage.getItem("tenPm"));
    $("#elevenPm .description").val(localStorage.getItem("elevenPm"));



    timeTracker();

})