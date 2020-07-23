 
var a = 'enter marks of student:';

var grade = prompt(a);

switch(grade){
 case "80": 
    result = "Grade A"; 
    break;
case "50": 
    result = "Grade B";
    break;
default:
    result = "please enter marks.."  
}
console.log(result);  
