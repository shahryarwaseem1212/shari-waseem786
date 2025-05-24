// script.js

function checkPassword() {
  var password = document.getElementById("password").value;
  if (password === "shari786") {  // Yahan apna password daal sakte hain
    document.getElementById("protected-content").style.display = "block";
  } else {
    alert("incorrect password!");
  }
}
