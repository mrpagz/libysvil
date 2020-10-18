// I have hardcoded most of the creation of divs and col in html but changed it to a DRY code after what tutor recommended and ask me to work on
// Tutor help me understand more on Jquery and applied it below


// Adding time to the planner
$(document).ready(function () {
    $("#currentDay").text(moment().format('LLLL'));
    writeToSchedule();
});

var Container = $(".container")
var currentHour = parseInt(moment().format("H"))
var schedule = JSON.parse(localStorage.getItem("schedule")) || {}
var start_hour = 8;
var end_hour = 17;

// loop to every hour on the planner
for (var i = start_hour; i <= end_hour; i++) {
    Row(i)
}
// displays the color of text area to determine if task is in the past, current or the future hour-
function Row(hour) {
    var time = moment(hour, "H")
    var display = time.format("hA")
    var timeclass = "past";
// 
    if (hour === currentHour) {
        timeclass = "present"
    } else if (currentHour < hour) {
        timeclass = "future"
    }  

    // creating div and class (I previously hardcoded this in html)
    var parent = $("<div>")
        .addClass('time-block row')

    // creating div, class and column (I previously hardcoded this in html)
    var hourEl = $("<div>")
        .addClass('col-1 hour')
        .text(display)

    // creating div and class (I previously hardcoded this in html)
    var textarea = $('<textarea>')
        .addClass('col-10 description')
        .addClass(timeclass)
        .val(schedule[display])

    // creating div and class (I previously hardcoded this in html)
    var saveBtn = $("<button>")
        .addClass('col-1 saveBtn')
        .click(clickBtn)
    // adding the save icon on the button with a link added in html
    var icon = $("<i>")
        .addClass('fas fa-save')

    saveBtn.append(icon)
    parent.append(hourEl, textarea, saveBtn)
    Container.append(parent)
}

function clickBtn() {
    var parent = $(this).parent()
    var hour = parent.find('.hour').text()
    var text = parent.find('.description').val()
// storing item in local storage
    schedule[hour] = text;
    localStorage.setItem('schedule', JSON.stringify(schedule))
}

// Comment out the code below I used as event listener on every hour after my tutor

// $("#saveBtnTen").click(function () {
//     var taskTimeSlot = "#textareaTen #textareaEleven #textareaTwelve and so on ";
//     var taskDetails = document.getElementById('textareaTen').value;
//     bookAppointment(taskTimeSlot, taskDetails);
//     writeToSchedule();
// });

