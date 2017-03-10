function validate(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;

  //Usernames...
  //Show message that there is an error with the username...
  var userln = userEntered.length;
  if (userln >= 6){
    document.getElementById("usernameGroup").classList.add("has-success");
  } else {
    document.getElementById("usernameError").innerHTML="Username must have at least six characters.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("usernameGroup").classList.add("has-error");
  }
  
  //Usernames cannot have spaces...
  if(userEntered.indexOf(' ') >= 0){
    document.getElementById("usernameError").innerHTML="Username must not contain spaces.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("usernameGroup").classList.add("has-error");
  } else {
      document.getElementById("usernameGroup").classList.add("has-success");
  }


//Passwords...
  var passln = passEntered.length; //for password length...

  // Password cannot be "password"...
  if (passEntered == "password"){
    document.getElementById("passwordError").innerHTML="Password cannot be password.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
  } else if (passEntered == "Password"){ //Password cannot be "Password"...
    document.getElementById("passwordError").innerHTML="Password cannot be Password.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
  } else {
    document.getElementById("passwordGroup").classList.add("has-success");
  }

//Password can't be the same as the username...
  if (passEntered == userEntered){
    document.getElementById("passwordError").innerHTML="Password cannot be the same as Username.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
  } else {
    document.getElementById("passwordGroup").classList.add("has-success");
  }

//Password length has to be 6 or more characters...
  if (passln >= 6){
    document.getElementById("passwordGroup").classList.add("has-success");
  } else {
    document.getElementById("passwordError").innerHTML="Password has to be 6 or more characters.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
  }

//Password length has to be 20 or less characters...
  if (passln <= 20){
    document.getElementById("passwordGroup").classList.add("has-success");
  } else {
    document.getElementById("passwordError").innerHTML="Password has to be 20 or less characters.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
  }
}
