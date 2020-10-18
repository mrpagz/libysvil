$(document).ready(function () {
    $("#currentDay").text(moment().format('LLLL'));
    writeToSchedule();
    
});
// event listener when save button is clicked
$("#saveBtnNine").click(function () {
    var appointmentTimeSlot = "#textareaNine";
    var appointmentDetails = document.getElementById('textareaNine').value;
    bookAppointment(appointmentTimeSlot, appointmentDetails);
    writeToSchedule();
    // console.log(writeToSchedule); 
});

$("#saveBtnTen").click(function () {
    var appointmentTimeSlot = "#textareaTen";
    var appointmentDetails = document.getElementById('textareaTen').value;
    bookAppointment(appointmentTimeSlot, appointmentDetails);
    writeToSchedule();
});

$("#saveBtnEleven").click(function () {
    var appointmentTimeSlot = "#textareaEleven";
    var appointmentDetails = document.getElementById('textareaEleven').value;
    bookAppointment(appointmentTimeSlot, appointmentDetails);
    writeToSchedule();
});

$("#saveBtnTwelve").click(function () {
    var appointmentTimeSlot = "#textareaTwelve";
    var appointmentDetails = document.getElementById('textareaTwelve').value;
    bookAppointment(appointmentTimeSlot, appointmentDetails);
    writeToSchedule();
});

$("#saveBtnOne").click(function () {
    var appointmentTimeSlot = "#textareaOne";
    var appointmentDetails = document.getElementById('textareaOne').value;
    bookAppointment(appointmentTimeSlot, appointmentDetails);
    writeToSchedule();
});

$("#saveBtnTwo").click(function () {
    var appointmentTimeSlot = "#textareaTwo";
    var appointmentDetails = document.getElementById('textareaTwo').value;
    bookAppointment(appointmentTimeSlot, appointmentDetails);
    writeToSchedule();
});

$("#saveBtnThree").click(function () {
    var appointmentTimeSlot = "#textareaThree";
    var appointmentDetails = document.getElementById('textareaThree').value;
    bookAppointment(appointmentTimeSlot, appointmentDetails);
    writeToSchedule();
});

$("#saveBtnFour").click(function () {
    var appointmentTimeSlot = "#textareaFour";
    var appointmentDetails = document.getElementById('textareaFour').value;
    bookAppointment(appointmentTimeSlot, appointmentDetails);
    writeToSchedule();
});

$("#saveBtnFive").click(function () {
    var appointmentTimeSlot = "#textareaFive";
    var appointmentDetails = document.getElementById('textareaFive').value;
    bookAppointment(appointmentTimeSlot, appointmentDetails);
    writeToSchedule();
});

// This function takes the new appointment and adds to schedule array.
function bookAppointment(time, details) {

    const newAppointment = { // an appointment object - using const unlike variable this does not change
        time: time, // Time of appointment
        title: details // Details from appointmenmt text area
    }
  
    // Create array to store task details
    scheduleArray = JSON.parse(localStorage.getItem("scheduleArray")) || [];
    

    // Remove any appointments previosly scheduled at the same time as new appointment.
    scheduleArray = scheduleArray.filter(appointment => appointment.time !== newAppointment.time);
    

    // add new appointment to Schedule Array
    scheduleArray.push(newAppointment);
  

    // Update local storage with revised task details
    localStorage.setItem('scheduleArray', JSON.stringify(scheduleArray));
    
}

// Declare function
function writeToSchedule() {
    // retrieving data stored in local storage (needs detailed explaination with tutor)
    scheduleArray = JSON.parse(localStorage.getItem("scheduleArray")) || [];
    // Use .map to sort out time and details from the Schedule Array
    scheduleArray.map(newAppointment => {
        //console.log("Writing to schedule")
        if (newAppointment.title != 0) {

            $(newAppointment.time).html(newAppointment.title);
        }
        console.log("The new appointment: " + newAppointment.title + " is at ... " + newAppointment.time);
    });
}
// HEEEEEELLLLLLLLLLPPPPPP!!