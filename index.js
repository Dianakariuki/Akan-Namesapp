function akan(){
    var year = parseFloat(document.getElementById("Year").value);
   // console.log(year);
  
    var month = parseFloat(document.getElementById("Month").value);
   // console.log(month);
  
    var day = parseFloat(document.getElementById("Date").value);
   // console.log(day)

    var century = parseFloat(year/100) +1;
  //  console.log(century);

    var birthday= ( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) % 7;

    var gender = document.getElementById("gender").value;
   // console.log(gender);


    var male= ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    
    var female = ["Akosua","Adwoa","Abenaa","Akua","Yaa", "Afua","Ama"];

    {
        if(birthday==0 && gender=="male") {
          document.getElementById("results").innerHTML = male [0];
          
        }
        else if(birthday==1 && gender=="male") {
          document.getElementById("results").innerHTML = male [1];
        }
       else if (birthday==2 && gender=="male") {
          document.getElementById("results").innerHTML = male [2];
        }
       else if (birthday==3 && gender=="male") {
          document.getElementById("results").innerHTML = male [3];
        }
      else if (birthday==4 && gender=="male") {
          document.getElementById("results").innerHTML = male [4];
        }
      else if (birthday==5 && gender=="male") {
          document.getElementById("results").innerHTML = male [5];
        }
       else  if(birthday==6 && gender=="male") {
          document.getElementById("results").innerHTML = male [6];
        }
/*female*/

        if(birthday==0 && gender=="female") {
          document.getElementById("results").innerHTML = female [0];
        }
        else if(birthday==1 && gender=="female") {
          document.getElementById("results").innerHTML = female [1];
         
        } 
       else  if(birthday==2 && gender=="female") {
        document.getElementById("results").innerHTML  =  female [2];
        } 
      else  if(birthday==3 && gender=="female") {
        document.getElementById("results").innerHTML = female [3];
        } 
     else   if(birthday==4 && gender=="female") {
      document.getElementById("results").innerHTML = female [4];
        } 
    else    if(birthday==5 && gender=="female") {
      document.getElementById("results").innerHTML = female [5];
        } 
      else  if (birthday==6 && gender=="female") {
        document.getElementById("results").innerHTML = female [6];
        }  
    }
}
