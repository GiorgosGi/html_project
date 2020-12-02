var subdate = document.getElementById("submission_date");


var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
 if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 

today = yyyy+'-'+mm+'-'+dd;



subdate.setAttribute("value", today);


subdate.addEventListener('change', function() {
    if (subdate.value){
        if (subdate.value < today){
            subdate.value = today;
        } 

    }

}, false);




