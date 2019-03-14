// set the date we're counting down to
var target_date = new Date('Aug, 1, 2019').getTime();
 
// variables for time units
var days, hours, minutes, seconds;
 
// get tag element
var countdown = document.getElementById('countdown');
var thedays = document.getElementById('days');
var thehours = document.getElementById('hours');
var theminutes = document.getElementById('minutes');
var theseconds = document.getElementById('seconds');
 
// update the tag with id "countdown" every 1 second
setInterval(function () {
 
    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;
 
    // do some time calculations
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;
     
    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;
     
    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);
     
    // format countdown string + set tag value
    //countdown.innerHTML = '<div class="days col-sm-3">' + days +  ' <b>Days</b></div> <div class="hours col-sm-3">' + hours + ' <b>Hours</b></div> <div class="minutes col-sm-3">'
   // + minutes + ' <b>Minutes</b></div> <div class="seconds col-sm-3">' + seconds + ' <b>Seconds</b></div>';
    thedays.innerHTML= days; 
    thehours.innerHTML= hours; 
    theminutes.innerHTML= minutes; 
    theseconds.innerHTML= seconds; 
    
    //styling the countdown
    
    
    
}, 1000);