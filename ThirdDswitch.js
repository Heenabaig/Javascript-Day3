 
var a = 'enter marks of student:';

var grade = prompt(a);

switch(grade){
 case "80": // this is what will be typed (case sensitive)
    result = "Grade A"; // assign some text to result - no brackets
    break;
case "50": // this is what will be typed (case sensitive)
    result = "Grade B";
    break;
default:
    result = "please enter marks.." //something wasn't matched   
}
console.log(result);  