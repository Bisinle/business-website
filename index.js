//subscribe button
const contentInput = document.querySelector(".input");
const contentButton = document.querySelector(".subscribe button");
contentButton.addEventListener("click", function (e) {
  contentInput.value = ''
  // console.log(contentInput.value);
});

const input = document.querySelector("#selectedService");
const select = document.querySelector("#select");

select.addEventListener("change", function (e) {
  input.value = e.target.value;
});

//submit button reset the values of the input
const allInputs = document.querySelectorAll(".inputs");
const submitResets = document.querySelector(".submit");
submitResets.addEventListener("click", function (e) {
  for (const iterator of allInputs) {
    iterator.value = "";
  }
});

