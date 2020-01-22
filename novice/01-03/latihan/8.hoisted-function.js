function exampleScope() {
    console.log(name);
    
    name(); 
  
    var name = function() {
      console.log("Hello, Aris Abdul Ajis")
    }
  }