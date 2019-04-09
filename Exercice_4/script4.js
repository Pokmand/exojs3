function allisok() {
  if (document.getElementById("password").value === document.getElementById("confirmPassword").value) {
    document.getElementById("password").style.border = "3px solid green";
    document.getElementById("confirmPassword").style.border = "3px solid green";
  }
  else {
    document.getElementById("password").style.border = "3px red solid";
    document.getElementById("confirmPassword").style.border = "3px red solid";
  }
}
