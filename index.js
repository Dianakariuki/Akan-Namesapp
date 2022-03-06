



//UI LOGIC

  var form = document.querySelector("form");

  form.addEventListener("submit",function (event){
    var month= document.querySelector("input#month.form-control").value;
    var year = document.querySelector("input#year.form-control").value;
    var date= document.querySelector("input#date.form-control").value;
    var gender= document.querySelector("input#gender.form-check-input").value;


    if ("gender" === gender) {
      alert("Please select a gender");
      event.preventDefault();
    } else if (date <= 0 || date > 31) {
      alert("invalid date, correct date(from 1 to 31)");
      event.preventDefault();
    } else if ("month" === month) {
      alert("Please select a month");
      event.preventDefault();
    } /*else if (year < 1900 || year > 2022) {
      alert("invalid year, correct format(e.g 2000, 1990)");
      event.preventDefault();
    } */else {
      akan(gender, month, date, year);
      event.preventDefault();
      location = window.location["href"];
    }
  });

  
   
 //bussiness logic
function akan(gender, month, date, year){
      var year = parseInt(document.getElementById("year").value);
    //console.log(year);
  
    var month = parseInt(document.getElementById("month").value);
    //console.log(month);
  
    var date = parseInt(document.getElementById("date").value);
    //console.log(day);
    
    var century = parseInt(year/100) +1;

   
    //console.log(century);*/
    
   
    
    var birthday = Math.round(( ( (century/4) -2*century-1) + ((5*(year)/4) ) + ((26*(month+1)/10)) + date ) % 7) ;
    //console.log(birthday);
    
    var gender = document.getElementById("gender").value;
    var gender = document.getElementById("gen").value;

    var male= ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    
  var female = ["Akosua","Adwoa","Abenaa","Akua","Yaa", "Afua","Ama"];

  if(year < 1900 || year > 2022) {
    alert("Please enter a valid year");
  }

  else {
    if(birthday===0 && gender==="male") {
      //document.getElementById("display").innerHTML = male [0];
      alert("Your Akan name is " + male[0]);
    }
    if(birthday===1 && gender==="male") {
      //document.getElementById("display").innerHTML = male [1];
      alert("Your Akan name is " + male[1]);
    }
    if(birthday===2 && gender==="male") {
      //document.getElementById("display").innerHTML = male [2];
      alert("Your Akan name is " + male[2]);
    }
    if(birthday===3 && gender==="male") {
     // document.getElementById("display").innerHTML = male [3];
      alert("Your Akan name is " + male[3]);
    }
    if(birthday===4 && gender==="male") {
      //document.getElementById("display").innerHTML = male [4];
      alert("Your Akan name is " + male[4]);
    }
    if(birthday===5 && gender==="male") {
      //document.getElementById("display").innerHTML = male [5];
      alert("Your Akan name is " + male[5]);
    }
    if(birthday===6 && gender==="male") {
      //document.getElementById("display").innerHTML = male [6];
      alert("Your Akan name is " + male[6]);
    }
    if(birthday===0 && gender==="female") {
      //document.getElementById("display").innerHTML = female [0];
      alert("Your Akan name is " + male[0]);
    }
    if(birthday===1 && gender==="female") {
      //document.getElementById("display").innerHTML = female [1];
      alert("Your Akan name is " + female[1]);
    } 
    if(birthday===2 && gender==="female") {
     // document.getElementById("display").innerHTML = female [2];
      alert("Your Akan name is " + female[2]);
    } 
    if(birthday===3 && gender==="female") {
     // document.getElementById("display").innerHTML = female [3];
      alert("Your Akan name is " + female[3]);
    } 
    if(birthday===4 && gender==="female") {
     // document.getElementById("display").innerHTML = female [4];
      alert("Your Akan name is " + female[4]);
    } 
    if(birthday===5 && gender==="female") {
    //  document.getElementById("display").innerHTML = female [5];
      alert("Your Akan name is " + female[5]);
    } 
    if (birthday===6 && gender==="female") {
     // document.getElementById("display").innerHTML = female [6];
      alert("Your Akan name is " + female[6] );
    }  
  }
 }
