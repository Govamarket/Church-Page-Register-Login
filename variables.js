const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("userEmail");
const passwordInput = document.getElementById("userPassword");
const passwordConfirm = document.getElementById("confirm");
const formInput = document.getElementById("form");
const iconPath = document.querySelector(".fa-sharp");
const buttonSubmit = document.getElementById("submit");
const validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// Targeting messages the error message hova here.
const emptyUserName = document.getElementById("emptyUserName");
const lessthanusername = document.getElementById("lessthanusername");
const emptymail = document.getElementById("emptymail");
const validmail = document.getElementById("validmail");
const emptypswd = document.getElementById("emptypswd");
const lessthanpassword = document.getElementById("lessthanpassword");
const emptyconfirm = document.getElementById("emptyconfirm");
const notmatch = document.getElementById("notmatch");
const errorIcon = document.querySelector(".fa-sharp");

export{
  usernameInput,
  emailInput,
  passwordInput,
  passwordConfirm,
  formInput,
  iconPath,
  buttonSubmit,
  validRegex,
  emptyUserName,
  lessthanusername,
  emptymail,
  validmail,
  emptypswd,
  lessthanpassword,
  emptyconfirm,
  notmatch,
  errorIcon,
}