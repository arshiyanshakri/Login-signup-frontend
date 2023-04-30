function Validation(inputs){
 
    let error={}; 
   
    if(inputs.name==="")
        error.name= "Name should not be empty"
     else
        error.name= ""

    if(inputs.email==="")
       error.email= "Name should not be empty"
    else
       error.email= ""
   
    if(inputs.password==="")
       error.password= "Password should not be empty"
    else
       error.password=""
    
    return error;
   }
   export default Validation;