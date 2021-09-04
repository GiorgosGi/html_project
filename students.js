var student_date_of_birth = document.getElementById('student_date_of_birth');

var todayMinus18years = new Date();
var dd = todayMinus18years.getDate();
var mm = todayMinus18years.getMonth()+1; 
var yyyy = todayMinus18years.getFullYear();
if(dd<10){
          dd='0'+dd
        } 
if(mm<10){
          mm='0'+mm
        } 
    
todayMinus18years = yyyy-18 +'-'+mm+'-'+dd;    

student_date_of_birth.setAttribute("value", todayMinus18years);

student_date_of_birth.addEventListener('change', function() {
    if (student_date_of_birth){
        if (student_date_of_birth.value > todayMinus18years){
            student_date_of_birth.value = todayMinus18years;
        } 
    }

}, false);

