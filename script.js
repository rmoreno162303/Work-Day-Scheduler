var dateToday = moment().format('dddd, MMM Do YYYY');
$('#currentDay').html(dateToday);

// let text = document.querySelector("data");
// data.value = localStorage.getItem("data")

timeTracker();

setInterval(()=> {timeTracker()},60000);

// $(document).ready(function () {

    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        console.log(text,time);

        var data =JSON.parse(localStorage.getItem("data")) || [];
        var newData= {
            id:time,
            text:text,
        }
        data.push(newData);
        window.localStorage.setItem("data",JSON.stringify(data));
        // event.preventDefault();
    })

    function timeTracker() {
        var timeNow = moment().hour();
  console.log("Current time", timeNow);
        $(".time-block").each(function () {
            var blockTime = $(this).attr("id");
            console.log("blocktime", blockTime);

            if (blockTime < timeNow) {
                // $(this).removeClass("future");
                // $(this).removeClass("present");
                $(this).addClass("past");
            }else if (blockTime == timeNow) {
                // $(this).removeClass("past");
                // $(this).removeClass("future");
                $(this).addClass("present");
            }else {
                // $(this).removeClass("present");
                // $(this).removeClass("past");
                $(this).addClass("future");
            }
        });

    // }


    // $('#tenAm').html(window.localStorage.getItem("time"));
    // $("#10 .description").val(localStorage.getItem("data"));
    // $("#11 .description").val(localStorage.getItem("data"));
    // $("#12 .description").val(localStorage.getItem("data"));
    // $("#13 .description").val(localStorage.getItem("data"));
    // $("#14 .description").val(localStorage.getItem("data"));
    // $("#15 .description").val(localStorage.getItem("data"));
    // $("#16 .description").val(localStorage.getItem("data"));
    // $("#17 .description").val(localStorage.getItem("data"));
    // $("#18 .description").val(localStorage.getItem("data"));
    // $("#19 .description").val(localStorage.getItem("data"));
    // $("#20 .description").val(localStorage.getItem("data"));
    // $("#21 .description").val(localStorage.getItem("data"));
    // $("#22 .description").val(localStorage.getItem("data"));
    // $("#23 .description").val(localStorage.getItem("data"));



    //timeTracker();

}