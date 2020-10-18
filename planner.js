var writeToSchedule = "currentDay";

$(document).ready(function () {
    $("#currentDay").text(moment().format('LLLL'));
    writeToSchedule();
    
});

$("#saveBtnNine").click(function () {
    //console.log("user clicked to save 9am appointment");
    var appointmentTimeSlot = "#textareaNine";
    var appointmentDetails = document.getElementById('textareaNine').value;
    bookAppointment(appointmentTimeSlot, appointmentDetails);
    writeToSchedule();
    console.log(appointmentTimeSlot); // THis works pretty well
});