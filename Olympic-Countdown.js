
function countDown() {
    
    //User's current Date & Time
    var currentDate = new Date().getTime();
    
    //Opening Ceremony date
    var openingDate = new Date("July 24, 2020");
    var n = currentDate.toLocaleTimeString();
    document.getElementById("demo").innerHTML = n;
}

