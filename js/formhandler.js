function infoForm() {
  // Assign form fields to short cut variables
var fname = document.form1.firstName;
var lname = document.form1.lastName;
var pnum = document.form1.phoneNumber;
var pwd = document.form1.pwd;
var radGp = document.form1.operation;
var fn = document.getElementById('fn');
var ln = document.getElementById('ln');
var pn = document.getElementById('pn');
var ct = document.getElementById('ct');
var pw = document.getElementById('pwm');

// Check for first name not blank
if (fname.value =="") {
  fn.innerHTML = "We need your first name.";
  fname.focus();
  return false;
} else {
  fn.innerHTML = "";
}

// Check for last name not blank
if (lname.value =="") {
  ln.innerHTML = "We need your last name.";
  lname.focus();
  return false;
} else {
  ln.innerHTML = "";
}
// Check for phone number not blank and then validate
if(pnum.value !="") {
pn.inner.HTML = validatePhone(pnum.value);
  if(pn.innerHTML !="") {
    pnum.focus();
    return false;
  }
} else {
  pn.innerHTML = "Please enter a phone number";
  pnum.focus();
  return false;
}
// Check for password entered and length is greater than or equal to 6 characters
if(pwd.value == "") {
  pwm.innerHTML = "Please provide your password.";
  pwd.focus();
  return false;
} else if (pwd.value.length < 6)
{
  pwm.innerHTML = "Your password should be at least 6 characters.";
  pwd.focus();
  return false;
} else {
  pwm.innerHTML = "";
}

// Loop on radio button group and see if any of them checked
var radioLength = radGp.length;
var chkValue;
var answer;
for(var i = 0; i<radioLength; i++)
{
  if(radGp[i].checked)
  {
    // This button is checked. Get the value
    chkValue = radGp[i].value;
  }
}
// If chkValue variable is undefined, then no radio button was selected
if (chkValue==undefined) {
  ct.innerHTML = results(chkValue);
  return false;
} else {
  ct.innerHTML = results(chkValue);
  // Write value of checked radio button to ct
}
function validatePhone(fld) {
  // Validate
  var error = "";
  var stripped = fld.replace(/[\(\)\.\-\ ]/g, '');
  if (isNan(parseInt(stripped))) {
    error = "The phone number contains illegal characters.";
  } else if (!(stripped.length == 10)) {
    error = "The phone number is the wrong length. Make sure you include an area code.";
  }
  // alert ("Error from validatePhone: "+ error);
  return error;
}
}

function results(op) {
  // Write results to
var z;
switch (op) {
  case "email":
  z= "Thank you, we will send hyou an email";
  break;
  case "mail":
  z= "Thank you, please add your mailing address to the comments";
  break;
  case "phone":
  z= "We look forward to speaking with you";
  case "do not contact":
  z= "We will never contact you.";
  break;
  default:
  z= "Please choose a contact preference";
  break;
}
  return z;
}
