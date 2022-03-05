function akan(){
    var year = parseFloat(document.getElementById("Year").value);
    //console.log(year);
  
    var month = parseFloat(document.getElementById("Month").value);
    //console.log(month);
  
    var day = parseFloat(document.getElementById("Date").value);
    //console.log(day)

    var birthday = Math.round((  + ((5*(year)/4) ) + ((26*(month+1)/10)) + day ) % 7) ;

    var gender = document.getElementById("gender").value;
    //console.log(gender);

}
