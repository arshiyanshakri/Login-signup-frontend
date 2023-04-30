function Validation(inputs){
 
 let error={}; 

 if(inputs.email==="")
    error.email= "Email should not be empty"
 else
    error.email= ""

 if(inputs.password==="")
    error.password= "Password should not be empty"
 else
    error.password=""

 return error;
}
export default Validation;