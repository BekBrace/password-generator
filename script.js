document.getElementById("btn1").onclick = function () {
  getPassword();
};
document.getElementById("btn2").onclick = function () {
  copyPassword();
};

function getPassword() {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwtzABCDEFGHIJKLMNOPQURSTVWXYZ!@#$%^&*()<>{}[]:;/?|";
  let passwordLength = 12;
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    let randInt = Math.floor(Math.random() * chars.length);
    password += chars.substring(randInt, randInt + 1);
  }
  document.getElementById("Password").value = password;
}

function copyPassword() {
  // get the text field
  let copiedPass = document.getElementById("Password");

  // select the text field
  copiedPass.select();

  // copy the text inside the text field
  document.execCommand("copy");

  // Alert user that password is copied
  alert("Your password is copied" + copiedPass.value);
}
