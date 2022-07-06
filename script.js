var dateToday = moment().format('dddd, MMM Do YYYY');
$('#currentDay').html(dateToday);


$(document).ready(function () {
    var info = $(this).siblings(".schedTime").val;
    var time = $(this).parent().attr("id");

    localStorage.setItem(info, text);
})

function manageTime() {
    var currentTime = moment().hour();

    $(".timeColumn").each(function () {
        var selectedTime = parseInt($(this).attr("id").split("hour")[1]);


        if (selectedTime < currentTime) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        } else if (selectedTime === currentTime) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        } else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }

    })
}


$("#tenAm .schedTime").val(localStorage.getItem("tenAm"));
$("#elevenAm .schedTime").val(localStorage.getItem("elevenAm"));
$("#twelvepm .schedTime").val(localStorage.getItem("twelvePm"));
$("#onePm .schedTime").val(localStorage.getItem("onePm"));
$("#twoPm .schedTime").val(localStorage.getItem("twoPm"));
$("#threePm .schedTime").val(localStorage.getItem("threePm"));
$("#fourPm .schedTime").val(localStorage.getItem("fourPm"));
$("#fivePm .schedTime").val(localStorage.getItem("fivePm"));
$("#sixPm .schedTime").val(localStorage.getItem("sixPm"));
$("#sevenPm .schedTime").val(localStorage.getItem("sevenPm"));
$("#eightPm .schedTime").val(localStorage.getItem("eightPm"));
$("#ninePm .schedTime").val(localStorage.getItem("ninePm"));
$("#tenPm .schedTime").val(localStorage.getItem("tenPm"));
$("#elevenPm .schedTime").val(localStorage.getItem("elevenPm"));



manageTime()