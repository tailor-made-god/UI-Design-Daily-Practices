const custom = document.getElementById("custom");
const width = document.getElementById("width");
const height = document.getElementById("height");

const radios = document.querySelectorAll('input[name="quality"]');

radios.forEach((radio) => {
  radio.addEventListener("click", function () {
    if (custom.checked) {
      width.disabled = false;
      height.disabled = false;
    } else {
      width.disabled = true;
      height.disabled = true;
    }
  });
});

// function changingColor(radio) {
//   const allBox = document.querySelectorAll(".box");
//   allBox.forEach((box) => {
//     box.classList.remove("active");
//     box.style.backgroundColor = "white";
//   });

//   const parentBox = radio.parentElement;
//   parentBox.classList.add("active");
//   parentBox.style.backgroundColor = "var(--color-bg)";
// }

// document.addEventListener("DOMContentLoaded", function () {
//   const checkedRadio = document.querySelectorAll('input[type="radio"]:checked');
//   if (checkedRadio) {
//     changingColor(checkedRadio);
//   }
// });
