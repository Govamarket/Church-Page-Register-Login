const inputMail = document.getElementById("email");
const inputPsw = document.getElementById("password");
const iconPath = document.querySelector(".fa-sharp");
const buttonSubmit = document.getElementById("btn");

// Targeting error messages
const emptyInput = document.getElementById('empty');
const notFound = document.getElementById('notmatch');
const mAtch = document.getElementById('match');
// password error messages
const emptyPsw = document.getElementById('emptyPsw');
const pswNotmatch = document.getElementById('notmatchPsw');
const errorIcon = document.querySelector(".fa-sharp");

// Targeting the local storage to implement the login page
const checkRegisteredMail = JSON.parse(localStorage.getItem('userEmail'));
const checkRegisteredMailConfirm = JSON.parse(localStorage.getItem('userPassword'));

inputMail.addEventListener('change', (event) => {
  setTimeout(() => {
    emailValid();
  }, 2000);
})

inputPsw.addEventListener('change', (event) => {
  setTimeout(() => {
    passwordValid();
  }, 2000);
});
const emailValid =() => {
  if (inputMail.value == "") {
    emptyInput.innerHTML = 'please enter your email';
    emptyInput.style.visibility = 'visible';
    notmatch.style.visibility = 'hidden';
  }else if (inputMail.value !== checkRegisteredMail) {
    notmatch.innerHTML = 'email does not match';
    notmatch.style.visibility = 'visible';
    emptyInput.style.visibility = 'hidden';
  }else if (inputMail.value === checkRegisteredMail) {
    notmatch.style.visibility = 'hidden';
    emptyInput.style.visibility = 'hidden';
  }
}

// Password validation
const passwordValid = () => {
  if (inputPsw.value === '') { 
    emptyPsw.innerHTML = 'Password not found';
    emptyPsw.style.visibility = 'visible';
    pswNotmatch.style.visibility = 'hidden';
  }else if (inputPsw.value !== checkRegisteredMailConfirm) {
    pswNotmatch.innerHTML = 'Password does not match';
    pswNotmatch.style.visibility = 'visible';
    emptyPsw.style.visibility = 'hidden';
  }else if (inputPsw.value === checkRegisteredMailConfirm) {
    emptyPsw.style.visibility = 'hidden';
    pswNotmatch.style.visibility = 'hidden';
  }
}


buttonSubmit.addEventListener('click',(event) => {
 if (!inputMail.value.match(checkRegisteredMail) || !inputPsw.value.match(checkRegisteredMailConfirm)) {
  errorIcon.style.visibility = "visible";
    alert("Incorrect login details");
 }else{
  errorIcon.style.visibility = "hidden";
  alert("successfully login");
  window.location.href = "index.html";
}

emailValid();
passwordValid();
})