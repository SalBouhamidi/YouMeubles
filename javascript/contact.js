const input = document.querySelectorAll(".input");
const texter = document.querySelector("textarea");
const content = document.getElementById("content");
const email = document.getElementById("email");
const button = document.querySelector("#button");
let valid = /^\w+@\w+\.(com|net|ma)$/;
function validitEmail() {
  if (valid.test(email.value)) {
    email.style.border = "2px solid green";
    return 1;
  } else {
    console.log("nice");
    email.style.border = "2px solid red";
  }
}
function validInput() {
  let x = 0;
  input.forEach((item) => {
    if (item.value.length > 3) {
      item.style.border = "2px solid green";
      x = 1;
    } else {
      item.style.border = "2px solid red";
      x = 0;
    }
  });
  if (x === 1) {
    return 1;
  } else {
    return 0;
  }
}
function validTextErai() {
  let found = 0;
  if (texter.value.length > 20 && texter.value.length < 150) {
    texter.style.border = "2px solid green";
    content.textContent = 150 - texter.value.length;
    content.style.color = "green";
    found = 1;
  } else {
    content.textContent = 150 - texter.value.length;
    content.style.color = "red";
  }

  if (found === 1) {
    return 1;
  } else {
    return 0;
  }
}
email.addEventListener("input", validitEmail);

texter.addEventListener("input", validTextErai);

input.forEach((item) => {
  item.addEventListener("input", validInput);
});

button.addEventListener("click", (e) => {
  if (validTextErai() === 1 && validTextErai() === 1 && validInput() === 1) {
    Swal.fire({
      position: "center",
      icon: "success",
      title: `${input[0].value}  ${input[1].value} , votre message a été envoyé, nous vous répondrons dans les plus brefs délais`,
      showConfirmButton: false,
      timer: 5000,
    });
    e.preventDefault();
  } else {
    validitEmail();
    validTextErai();
    validInput();
    e.preventDefault();
  }
});
