let decrease = document.getElementById("btn-decrease");
let reset = document.getElementById("btn-reset");
let increase = document.getElementById("btn-increase");
let counting = document.getElementById("counting");
counting = 0;

function increasee() {
  counting += 1;
  //   counting.textContent = counting; === Защо не работи този метод?
  document.getElementById("counting").textContent = counting;
  console.log(counting);
}
increase.addEventListener("click", function () {
  increasee();
});

function decreasee() {
  counting -= 1;
  document.getElementById("counting").textContent = counting;
}
decrease.addEventListener("click", function () {
  decreasee();
});

function resett() {
  counting = 0;
  document.getElementById("counting").textContent = counting;
}
reset.addEventListener("click", () => {
  resett();
});
