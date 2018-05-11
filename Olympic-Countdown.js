
<script>
function myFunction() {
    
    //User's current Date & Time
    var currentDate = new Date();
    
    //Opening Ceremony date
    var openingDate = new Date("July 24, 2020");
    var n = currentDate.toLocaleTimeString();
    document.getElementById("demo").innerHTML = n;
}
</script>

