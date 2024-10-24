const allEntries = document.getElementsByName("entry");

const card = document.getElementById("card");

const paytime = document.getElementById("paytime");

card.addEventListener("click", function () {
  allEntries.forEach((entry) => {
    entry.disabled = false;
  });
});
paytime.addEventListener("click", function () {
  allEntries.forEach((entry) => {
    entry.disabled = true;
  });
});
