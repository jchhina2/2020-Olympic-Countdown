        //Define the official opening date for the user. 
        var openingDate = new Date("July 24, 2020 00:00:00").getTime();
       
        //Update the countdown
        var func = setInterval(function() {
            
            //Get the current date and time of the user
            var dateNow = new Date().getTime();
            
            //Find the time length before the opening
            var timeBeforeOpening = openingDate - dateNow;
            
            //Get number of days before Olympics
            var daysBefore = Math.floor(timeBeforeOpening / (1000 * 60 * 60 * 24));
            
           //Get number of hours before Olympics
           var hoursBefore = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));     
            
            document.getElementById("demo").innerHTML = daysBefore + " days " + hoursBefore + " hours ";
        }, 1000);
