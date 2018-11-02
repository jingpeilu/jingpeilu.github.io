function passWord() {
var testV = 1;
var pass1 = prompt('Please Enter Password',' ');
while (testV < 3) {
if (!pass1) 
history.go(-1);
if (pass1.toLowerCase() == "asdf") {
window.open("misc/misc.html");
break;
} 
testV+=1;
var pass1 = prompt('Access Denied - Password Incorrect, Please Try Again.','');
}
if (pass1.toLowerCase()!="password" & testV ==3) 
return " ";
} 