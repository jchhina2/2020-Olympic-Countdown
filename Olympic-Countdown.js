
function countDown() {
    
    //Get the User's current Date & Time
    var currentDate = new Date().getTime();
    
    //Create the Opening Ceremony date
    var openingDate = new Date("July 24, 2020").getTime();
   
    //Updates the countdown every 1000 milliseconds, or 1 second
    var beginCountdown = setInterval(function(){
        var n = currentDate.toLocaleTimeString();
        document.getElementById("demo").innerHTML = n;
    },1000);        
}

