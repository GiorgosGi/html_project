var start = document.getElementById("startdate");
var end = document.getElementById('enddate');


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


var tomorrow = new Date();
var dd = tomorrow.getDate()+1;
var mm = tomorrow.getMonth()+1; 
var yyyy = tomorrow.getFullYear();
 if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 

    tomorrow = yyyy+'-'+mm+'-'+dd;


start.setAttribute("value", today);
end.setAttribute("value", tomorrow);

start.addEventListener('change', function() {
    if (start.value){
        if (start.value < today){
            start.value = today;
        } else {
            if (start.value > end.value){
                console.log("startdate is before today!");
                end.value = start.value;
            }
        }
    }
}, false);

end.addEventListener('change', function() {
    if (end.value){
        if (end.value < tomorrow){
            end.value = tomorrow;
        } else {
        if (end.value < start.value){
            console.log("enddate is before startdate!");
            end.value = start.value;
            
        } 
      }
    }
}, false);



