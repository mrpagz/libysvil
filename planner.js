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

$("#saveBtnTen").click(function () {
    //console.log("user clicked to save 10am appointment");
    var appointmentTimeSlot = "#textareaTen";
    var appointmentDetails = document.getElementById('textareaTen').value;
    bookAppointment(appointmentTimeSlot, appointmentDetails);
    writeToSchedule();
});

$("#saveBtnEleven").click(function () {
    //console.log("user clicked to save 11am appointment");
    var appointmentTimeSlot = "#textareaEleven";
    var appointmentDetails = document.getElementById('textareaEleven').value;
    bookAppointment(appointmentTimeSlot, appointmentDetails);
    writeToSchedule();
});

$("#saveBtnTwelve").click(function () {
    //console.log("user clicked to save 12pm appointment");
    var appointmentTimeSlot = "#textareaTwelve";
    var appointmentDetails = document.getElementById('textareaTwelve').value;
    bookAppointment(appointmentTimeSlot, appointmentDetails);
    writeToSchedule();
});

$("#saveBtnOne").click(function () {
    //console.log("user clicked to save 1pm appointment");
    var appointmentTimeSlot = "#textareaOne";
    var appointmentDetails = document.getElementById('textareaOne').value;
    bookAppointment(appointmentTimeSlot, appointmentDetails);
    writeToSchedule();
});

$("#saveBtnTwo").click(function () {
    //console.log("user clicked to save 2pm appointment");
    var appointmentTimeSlot = "#textareaTwo";
    var appointmentDetails = document.getElementById('textareaTwo').value;
    bookAppointment(appointmentTimeSlot, appointmentDetails);
    writeToSchedule();
});

$("#saveBtnThree").click(function () {
    //console.log("user clicked to save 3pm appointment");
    var appointmentTimeSlot = "#textareaThree";
    var appointmentDetails = document.getElementById('textareaThree').value;
    bookAppointment(appointmentTimeSlot, appointmentDetails);
    writeToSchedule();
});

$("#saveBtnFour").click(function () {
    //console.log("user clicked to save 4pm appointment");
    var appointmentTimeSlot = "#textareaFour";
    var appointmentDetails = document.getElementById('textareaFour').value;
    bookAppointment(appointmentTimeSlot, appointmentDetails);
    writeToSchedule();
});

$("#saveBtnFive").click(function () {
    //console.log("user clicked to save 5pm appointment");
    var appointmentTimeSlot = "#textareaFive";
    var appointmentDetails = document.getElementById('textareaFive').value;
    bookAppointment(appointmentTimeSlot, appointmentDetails);
    writeToSchedule();
});