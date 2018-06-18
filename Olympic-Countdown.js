
function countDown() {
    
    //Get the User's current Date & Time
    var currentDate = new Date().getTime();
    
    //Create the Opening Ceremony date
    var openingDate = new Date("July 24, 2020").getTime();
   
    //Updates the countdown every 1000 milliseconds, or 1 second
    var beginCountdown = setInterval(function(){
        var n = currentDate.toLocaleTimeString();
        
        //Calculate the distance between today and the Opening date
        var timeBeforeOpening = openingDate - currentDate;
        
        //The math that will calculate the difference
        var daysBeforeOpening = Math.floor(timeBeforeOpening / (1000 * 60 * 60 * 24));
        document.getElementById("demo").innerHTML = daysBeforeOpening;
    },1000);        
}

