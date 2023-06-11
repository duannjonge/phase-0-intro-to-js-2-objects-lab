// Write your solution in this file!
const employee = {

name:"Branden",
streetAddress:"Dijam",

};



    function updateEmployeeWithKeyAndValue(employee, key, value) {
        // Create a new object by spreading the properties of the employee object
        const updatedEmployee = { ...employee };
      
        // Update the value for the specified key in the new object
        updatedEmployee[key] = value;
      
        // Return the updated object
        return updatedEmployee;
      }
      
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
  employee.name="Jason";
  employee.
  
return updateEmployeeWithKeyAndValue
}
// function deleteFromEmployeeByKey(){


// }
// destructivelyDeleteFromEmployeeByKey(){


// }

let updatedEmployee  = updateEmployeeWithKeyAndValue(employee,"Eston","Bamboo")
console.log(updatedEmployee)