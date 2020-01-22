var subjek = {anama:"Aris Abdul", anama:"Ajis", umur:23}; 
  
  var a = "";
  var x;
  for (x in subjek) {
    a += subjek[x] + " ";
  }

  console.log(a)