function myLocalScope() {
    
     let myVar="this is beautiful"
  
  
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
 
  console.log('outside myLocalScope', myVar);