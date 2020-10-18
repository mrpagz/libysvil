$(document).ready(function () {
    $("#currentDay").text(moment().format('LLLL'));
    //console.log(moment().format('dddd') + ", " + moment().format('LL'));
    writeToSchedule();
    console.log();
});