
<script>
function myFunction() {
    var d = new Date();
    
    //Opening Ceremony date
    var openingDate = new Date("July 24, 2020");
    var n = d.toLocaleTimeString();
    document.getElementById("demo").innerHTML = n;
}
</script>

